import type {Config, Context} from '@netlify/edge-functions'

/**
 * Passordsperre foran hele siden, fram til lansering.
 *
 * Sjekken kjører på kanten, før noe innhold sendes ut. Det er poenget: en
 * sperre i nettleseren ville fått HTML-en levert først og deretter lagt et
 * lag over den — priser, planer og tekster ville ligget i kildekoden for
 * hvem som helst. Her kommer de aldri ut av Netlify uten riktig passord.
 *
 * Passordet ligger i miljøvariabelen SIDE_PASSORD, ikke i repoet. Er den
 * ikke satt, slipper ingen inn. Det er med vilje: en glemt variabel skal
 * stenge siden, ikke åpne den.
 *
 * Skal av før lansering — se «Passord på siden» i CLAUDE.md.
 */

const COOKIE = 'nyork-adgang'

/**
 * Cookien inneholder ikke passordet, men et avtrykk av det. Da ligger ikke
 * passordet i klartekst hos alle som har vært innom, og en cookie fra en
 * gammel deploy slutter å virke idet passordet byttes.
 */
async function avtrykk(passord: string): Promise<string> {
  const data = new TextEncoder().encode(`nyork:${passord}`)
  const sum = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(sum)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function side(feil: boolean): Response {
  return new Response(
    `<!doctype html>
<html lang="no">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Nyørk Hemsedal</title>
<style>
  :root { color-scheme: light }
  * { box-sizing: border-box }
  body {
    margin: 0; min-height: 100svh; display: grid; place-items: center; padding: 24px;
    background: #0d262e; color: #f7f8f8;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  main { width: 100%; max-width: 360px; text-align: center }
  h1 { font-size: 28px; letter-spacing: .12em; margin: 0 0 8px }
  p { margin: 0 0 28px; opacity: .7; font-size: 15px; line-height: 1.5 }
  form { display: flex; flex-direction: column; gap: 12px }
  input {
    width: 100%; height: 48px; padding: 0 16px; border-radius: 12px;
    border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.08);
    color: inherit; font-size: 16px;
  }
  input:focus-visible { outline: 2px solid #a8d7e6; outline-offset: 2px }
  button {
    height: 48px; border: 0; border-radius: 12px; background: #f7f8f8; color: #0d262e;
    font-size: 16px; font-weight: 600; cursor: pointer;
  }
  button:hover { background: #fff }
  .feil { margin: 0 0 16px; color: #f4d2c8; font-size: 14px }
</style>
</head>
<body>
  <main>
    <h1>NYØRK</h1>
    <p>Siden er ikke lansert ennå. Har du fått passordet, kan du se den her.</p>
    ${feil ? '<p class="feil">Feil passord. Prøv igjen.</p>' : ''}
    <form method="POST">
      <input type="password" name="passord" placeholder="Passord" autofocus autocomplete="current-password" required>
      <button type="submit">Se siden</button>
    </form>
  </main>
</body>
</html>`,
    {
      status: feil ? 401 : 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
        // Siden skal ikke havne i søk mens den ligger bak passord.
        'x-robots-tag': 'noindex, nofollow',
      },
    },
  )
}

export default async function passordsperre(request: Request, context: Context) {
  const passord = Netlify.env.get('SIDE_PASSORD')

  // Feiler lukket. Uten passord satt slipper ingen inn — heller en stengt
  // side enn en åpen en fordi noen glemte miljøvariabelen.
  if (!passord) return side(false)

  const forventet = await avtrykk(passord)

  const cookie = request.headers.get('cookie') ?? ''
  const harAdgang = cookie.split(';').some((del) => del.trim() === `${COOKIE}=${forventet}`)
  if (harAdgang) return context.next()

  if (request.method === 'POST') {
    const skjema = await request.formData()
    if (String(skjema.get('passord') ?? '') === passord) {
      return new Response(null, {
        status: 303,
        headers: {
          location: new URL(request.url).pathname,
          'set-cookie': `${COOKIE}=${forventet}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
        },
      })
    }
    return side(true)
  }

  return side(false)
}

export const config: Config = {
  path: '/*',
  // Netlifys egne stier må slippe forbi, ellers kan ikke siden bygges eller
  // skjemaer sendes inn.
  excludedPath: ['/.netlify/*'],
}
