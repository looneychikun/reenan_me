// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

//import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://reenan.me',

  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ],
  },

  integrations: [sitemap(), mdx()],
  // adapter: cloudflare({
  //   imageService: "compile"
  // }),
});