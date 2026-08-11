# Nyørk Design System

**Nyørk** is a cabin ("hytte") development in Hemsedal, Norway — pitched as sentrumsnært ("close to the center") and skin-in-out (walk to lift and to town). The design system was extracted from a Figma file, `nyørktokens.fig` (mounted read-only; pages: Farger, Typografi, Forside, Hytter, 1-hytte, Hemsedal, Button, nav, Article, Logo-logoikon, Playground, Thumbnail). No codebase or slide deck was attached — everything here comes from that Figma file.

The kit is a marketing/sales site (home, cabin listings, a cabin detail page, a destination/about-area page) built on a **shadcn/ui-style component library** (Button, Table, Dropdown Menu, Checkbox, Toggle, Switch, Input, Badge, Avatar, Progress — "Default"/"New York" style axis, exactly like shadcn's registry) that has been re-skinned with Nyørk's own tokens, plus a smaller set of bespoke marketing components (the real site button, nav, cards, tabs, image containers) actually used across the marketing pages.

## Sources
- Figma file: `nyørktokens.fig` (attached to this project as a virtual filesystem — re-attach via the Import menu to browse it again)
- Pages read: Farger (colors), Typografi (type), Forside (home), Hytter (cabin listing + destination info), 1-hytte (cabin detail), Hemsedal (destination photo), Button, nav, Article, Logo-logoikon, Playground (earlier home iteration), Thumbnail
- No GitHub repo, codebase, or slide deck was provided

## Index
- `styles.css` — root stylesheet; imports everything below
- `tokens/` — `fig-tokens.css` (294 CSS custom properties from the file's 4 Figma Variable collections: Ungrouped, Primitives, Theme, Color — light/dark modes included), `fonts.css` (Google Fonts import + substitution note), `typography.css` (type-scale utility classes)
- `components/forms/` — Button (real site button), Input, Checkbox (Heckbox), Switch, Toggle, FormControlLabel, FormControlValidationMessageError
- `components/data-display/` — Badge, Avatar, Progress, DataBadge, Card, AspectRatio, Caption
- `components/data-table/` — the shadcn-style admin/listing kit: Table, Table Cell, Table Header, Dropdown Menu (+ Content, Menu Item, Section Title), Data Table Footer (Total, Caption), Data Table Header (Header Button, Filters Dropdown), Button2 (the shadcn multi-style Button), plus their icon dependencies
- `components/site/` — Nav, NavLink, Menu, Tab, Favikon, Pattern, NyheterTittel, ImageContainer, ImageContainerHytte05, Button
- `assets/logo/` — Logo lockups (icon mark, bottom-text and right-text lockups; brand + white)
- `assets/icons/` — `icon-data.js` + `Icon.jsx`, ~31 Lucide-style 24×24 glyphs
- `assets/images/` — hero photography, cabin interiors, Hemsedal panorama
- `guidelines/` — foundation specimen cards (color, type, spacing, radius, brand imagery, card surface)
- `ui_kits/nyork-website/` — 4-screen interactive click-through: Home, Cabin listing, Cabin detail, Destination
- `thumbnail.html` — project tile

## Components (full list)
**Forms:** FormsButton (real site button — Type: primary/secondary/ghost/inreverse × State: default/hover/disabled), Input, Heckbox (checkbox), Switch, Toggle, FormControlLabel, FormControlValidationMessageError
**Data display:** Badge, Avatar, Progress, DataBadge, Card, AspectRatio, Caption
**Data table kit:** Table, TableCell, TableHeader, DropdownMenu, DropdownMenuContent, DropdownMenuMenuItem, DropdownMenuSectionTitle, DataTableFooterTotal, DataTableFooterCaption, DataTableHeaderHeaderButton, DataTableHeaderFiltersDropdown, Button2 (shadcn multi-style button), DataTableSwitch, DataTableToggle, DataTableAvatar, DataTableBadge, DataTableProgress, DataTableDataBadge, DataTableAspectRatio, DataTableComponentsAvatar, Heckbox
**Site:** Nav, NavLink, Menu, Tab, Favikon, Pattern, NyheterTittel, ImageContainer, ImageContainerHytte05, Button
**Icons (via `<Icon name="…"/>`):** AbstractCheck, AbstractCircle, AbstractDotFilled, AbstractMinus, AbstractReload, ArrowsArrowDown, ArrowsArrowUp, ArrowsChevronRight, Icons24x24Bold/Box/Check/ChevronDown/ChevronRight/ChevronUp/ChevronsUpDown/Chrome/Circle/Cloud/Compass/CreditCard/Github/Keyboard/LifeBuoy/Loader/LogOut/Plus/Settings/Underline/User/UserPlus/Users/XCircle
**Logo:** LogoKunLogoLargeBrand/Hvit, LogoKunLogoMediumBrand, LogoKunLogoSmallBrand, LogoKunLogoXSmall, LogoLogoBottomTextLarge, LogoLogoRightTextLarge

### Intentional additions
- `Icon` (assets/icons) — a thin wrapper the icon set needed to render by name; not itself a Figma component.
- Several names carry a directory prefix (`DataTableSwitch`, `FormsButton`, `DataDisplayButton`, `SiteIconSlotPlaceholder`, etc.) purely to avoid namespace collisions — the shadcn-style kit (`components/data-table/`) and the bespoke marketing kit (`components/forms/`, `components/site/`) both happen to define components with the same Figma names (Button, Switch, Toggle, Avatar, Badge, Progress…) because they are genuinely two different component families that share vocabulary. Each is the real design, just disambiguated. `components/forms/Toggle.jsx` imports its icon glyphs directly from `components/data-table/` rather than duplicating them.

## Coverage
- Figma component families: **65 of 65** implemented (31 named component sets + every standalone symbol worth shipping as a component — icons, logos, placeholders).
- Token collections: **294 of 221 variables** registered (294 counts each variable's modes — Light/Dark/Nyørk theme scopes — separately), covering all 4 collections (Ungrouped, Primitives, Theme, Color) at 100%.
- Figma defines no formal Text Styles (the "h1/body/ingress/…" layers in the Typografi page are placeholder labels, not real type styles) — the type scale in `tokens/typography.css` was reconstructed from the actual font-family/size/line-height/letter-spacing values used on real marketing pages (Forside, Hytter, 1-hytte, Hemsedal).

## Fonts
- **Outfit** (headings), **Poppins** (body), **Open Sans** (breadcrumb/detail), **Inter** (minor UI text) — all on Google Fonts, loaded in `tokens/fonts.css`.
- **ITC Franklin Gothic LT Pro** (button/label text) is a licensed font not available on Google Fonts. Substituted with **Libre Franklin** (an open-source relative of Franklin Gothic) as a visual placeholder — the CSS still names the real family first so real `@font-face` files can be dropped in later. **Please supply the licensed font files if you have access to them.**

## Content fundamentals
- **Language:** Norwegian (Bokmål) throughout — nav, headlines, body copy, breadcrumbs, buttons.
- **Voice:** warm, direct, low-key — sells a place, not a deal. Headlines make a promise ("Velkommen til Nyørk!", "Sentrumsnært. Skin-in-out.") and body copy backs it with plain facts (location, unit counts, floor count) rather than superlatives.
- **Person:** second person implied through imperatives ("Meld din interesse og bli med oss på eventyret!" — "sign up and join us on the adventure") — invites the reader in rather than describing the company in third person.
- **Casing:** sentence case everywhere (headlines, buttons, nav) — never Title Case or ALL CAPS.
- **Punctuation quirk:** prices are written with a trailing comma-dash, Norwegian-style — "10 050 000 ,-" — and space-separated thousands, not commas or periods.
- **Emoji:** never used.
- **CTAs:** short, specific verbs — "Les mer", "Les mer om feltet", "Sjekk ut hyttene", "Meld interesse" — never generic ("Submit", "Click here").
- **Vibe:** aspirational-but-grounded mountain-town real estate. Confident about the location (ski-in/out, town center), modest about the sell (no exclamation-heavy hype, no urgency banners beyond factual scarcity — "kun 1 ledig hytte igjen for salg").

## Visual foundations
- **Color:** one signature teal-blue (`core/brand`, 050→900, anchored at `rgb(13,38,46)`/`rgb(0,31,35)` for text and dark surfaces) plus a warm neutral beige (`core/beige`) for photography-adjacent panels, a cool neutral gray ramp (`core/neutral`) for UI chrome, and small semantic accents (green/red/warm-yellow) reserved for feedback states only. Two background colors max per composition: white/near-white or the deep brand teal as a reversed (dark) surface.
- **Type:** Outfit (headings, 600–700 weight, tight tracking) paired with Poppins (body, 400 weight, roomy 130% line-height) — a geometric/humanist grotesque pairing that reads modern and friendly rather than corporate. Open Sans appears only in small UI text (breadcrumbs, details). No serif anywhere.
- **Spacing:** 4px base unit; the scale runs 4/8/12/16/20/24/…/64 — generous section padding (48–97px vertical rhythm between major blocks) gives pages room to breathe.
- **Backgrounds:** full-bleed photography is the primary background device — hero shots and destination imagery run edge-to-edge inside large (24px) rounded frames, often with a translucent white (85% opacity) message panel floated on top. No illustration, no repeating pattern/texture, no gradients except a subtle placeholder fill behind unloaded images. `pattern` component variants exist for placeholder/loading states only.
- **Animation:** none specified in the source file — treat all interaction as instant state changes (no easing curves, durations, or transition specs were present).
- **Hover states:** color-based — buttons swap to a slightly shifted brand tone (`semantic-color-foreground-hover`) rather than darkening/lightening uniformly; no scale or shadow changes on hover.
- **Press/disabled states:** disabled = 50% opacity, same shape and color otherwise. No distinct "pressed" state was defined; hover is the only non-default interactive state in the source.
- **Borders & shadows:** hairline 1px borders (`semantic-color-border-default`, `rgb(220,223,223)`) — never drop shadows. Cards, tables and inputs all use `box-shadow: inset 0 0 0 1px …` (an inset hairline) instead of elevation shadows. This is a flat, light, borderless-until-needed system.
- **Corner radii:** 4px (buttons, small controls), 8px (inputs, badges), 12px (cards, spec panels), 24px (full-bleed photo frames) — a small, consistent step scale, never a full pill except on the Button2/shadcn "pill" radius token used for chips.
- **Transparency/blur:** the nav bar and hero message panels use `rgba(255,255,255,0.85)` with a ~11px backdrop blur — the one deliberate glass-morphism moment in an otherwise flat system, reserved for content floating over photography.
- **Imagery color vibe:** warm, sunlit mountain photography — timber cabins, snow, golden-hour tones. No black-and-white or heavily desaturated treatment; no visible grain/noise style.
- **Layout rules:** content is centered with a max-width rail (800–1000px for text/detail pages, up to 1600px for the home page's photo/card blocks); the nav bar is fixed/sticky with blur; breadcrumb → H1 → hero image is the fixed opening pattern for every interior page.

## Iconography
- The icon set is a **Lucide-compatible 24×24 outline family** (chevrons, chrome, github, life-buoy, log-out, credit-card, user-plus, x-circle, etc.) — the exact vocabulary shadcn/ui ships with by default, re-drawn at the file's own geometry. Extracted as one `icon-data.js` + `Icon.jsx` wrapper in `assets/icons/`; render with `<Icon name="Icons24x24ChevronDown" size={20}/>`.
- A second, smaller "Abstract" and "Arrows" icon family (check, circle, dot-filled, minus, reload, arrow-up/down, chevron-right) covers checkbox/radio/toggle glyphs and sort indicators inside the data-table kit.
- No emoji, no Unicode-character icons, no icon font — everything is SVG path data.
- `favikon` (in `components/site/`) is the site's favicon mark at 4 sizes × 2 colors (brand/white) — use it for browser tab icons and small brand chips.

## Logo
The source file defines a real vector wordmark ("NYØRK") — not a placeholder. Three lockup styles exist: **Kun Logo** (icon mark alone, 4 sizes), **Logo + bottom text** (mark stacked over a small-caps tagline), and **logo + Right Text** (mark beside text) — each in **Brand** (dark teal) and **Hvit** (white, for dark/photo backgrounds) colorways. This design system materialized the icon mark at 4 sizes and one representative size of each text lockup in both colorways (`assets/logo/`); the remaining size variants are pure CSS-scale copies of the same vectors and were not separately materialized — scale the existing files rather than re-extracting.

### Full component file index
For reference, every exported component name in this system: FormsButton, Input, FormsHeckbox, Switch, Toggle, FormControlLabel, FormControlValidationMessageError, FormsIconSlotPlaceholder, FormsPlaceholder, FormsAbstractCheck, FormsAbstractMinus, Badge, Avatar, ComponentsAvatar, Progress, DataBadge, Card, AspectRatio, Caption, DataDisplayButton, IconSlotPlaceholder, Placeholder, Table, TableCell, TableHeader, DropdownMenu, DropdownMenuContent, DropdownMenuMenuItem, DropdownMenuSectionTitle, DataTableFooterTotal, DataTableFooterCaption, DataTableHeaderHeaderButton, DataTableHeaderFiltersDropdown, Button2, DataTableSwitch, DataTableToggle, DataTableAvatar, DataTableBadge, DataTableProgress, DataTableDataBadge, DataTableAspectRatio, DataTableComponentsAvatar, Heckbox, Icons24x24Bold, Icons24x24Box, Icons24x24Check, Icons24x24ChevronDown, Icons24x24ChevronRight, Icons24x24ChevronUp, Icons24x24ChevronsUpDown, Icons24x24Circle, Icons24x24Loader, AbstractCheck, AbstractCircle, AbstractDotFilled, AbstractMinus, AbstractReload, ArrowsArrowDown, ArrowsArrowUp, ArrowsChevronRight, ObjectsEyeNone, Placeholder2, TypographyFontBold, Nav, NavLink, Menu, Tab, Favikon, Pattern, NyheterTittel, ImageContainer, ImageContainerHytte05, Button, SiteIconSlotPlaceholder, SitePlaceholder, Icon, LogoKunLogoLargeBrand, LogoKunLogoLargeHvit, LogoKunLogoMediumBrand, LogoKunLogoSmallBrand, LogoKunLogoXSmall, LogoLogoBottomTextLarge, LogoLogoRightTextLarge.

## Caveats
- **ITC Franklin Gothic LT Pro** — licensed font, not shipped. Falls back to Libre Franklin. Please share the real files if you have a license.
- The "Text styles" Figma inventory is empty — the type scale in `tokens/typography.css` was reconstructed from real page usage rather than named styles; sizes/weights are exact, but there is no canonical "style name" to cite back to Figma.
- Two component families in the source share names (e.g. "Button", "Switch", "Toggle") because the file contains both a bespoke marketing kit and a full shadcn/ui-style admin kit. They've been kept as distinct components with directory-prefixed names (see "Intentional additions" above) rather than merged, since they are visually and structurally different components.
- A few very-high-instance-count component variants (Table Cell: 108 variants, Button2: 288 variants) produced large single files (up to ~400KB) — functionally complete, but worth refactoring into smaller per-variant files if this system grows further.

---
**Ask:** this is a first full pass at importing the Nyørk kit — please flag anything that reads wrong (copy, color, a component that doesn't match your latest Figma) and I'll iterate. Two things I'd love your input on especially: (1) do you have the real ITC Franklin Gothic LT Pro files, and (2) should the shadcn-style Data Table kit actually be showing up anywhere in the live site, or was it a separate internal-tools exploration that shouldn't be styled as customer-facing?
