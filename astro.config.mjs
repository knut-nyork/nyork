// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Trengs for absolutte URL-er i canonical og hreflang. Byttes til nyørk.no
  // den dagen domenet overføres.
  site: 'https://nyork-hemsedal.netlify.app',
  // Bare ikonene som faktisk brukes havner i bygget, ikke hele MDI-settet.
  // Navnene er kartlagt til norske aktiviteter i src/components/Ikon.astro.
  integrations: [react(), icon({include: {mdi: ['*']}})],
  vite: {
    plugins: [tailwindcss()],
  },
});