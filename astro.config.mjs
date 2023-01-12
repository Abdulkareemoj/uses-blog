
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [sitemap(), image(), react() ],
});
