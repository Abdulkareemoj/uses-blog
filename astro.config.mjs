import image from '@astrojs/image';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
// https://astro.build/config


// https://astro.build/config
export default defineConfig({
  site: 'https://abdulkareemoj.github.io',
  base: '/uses-blog',
  //https://uses.wiztek.com
  integrations: [sitemap(), image(), react(), tailwind()],
  // output: "server",

});