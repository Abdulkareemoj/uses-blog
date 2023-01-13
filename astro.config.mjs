import image from '@astrojs/image';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
site: 'https://what-i-use.vercel.app', //https://uses.wiztek.com
  integrations: [sitemap(), image(), react(), tailwind()]
});