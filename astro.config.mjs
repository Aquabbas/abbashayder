import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'ar', 'sv'],
    defaultLocale: 'ar',
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://abbashayder.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
