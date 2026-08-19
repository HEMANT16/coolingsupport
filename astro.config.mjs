// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://coolingsupport.com',
  trailingSlash: 'always',

  redirects: {
    '/tools': '/'
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/node_modules/**', '**/dist/**', '**/.git/**', '**/public/**', '**/.astro/**']
      }
    }
  },

  integrations: [sitemap()],
  adapter: cloudflare()
});