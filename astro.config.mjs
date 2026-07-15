// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const forCloudflare = process.env.DEPLOY_TARGET === 'cf';

export default defineConfig({
  site: forCloudflare ? 'https://petrov-web-design.pages.dev' : 'https://brpetrov.github.io',
  base: forCloudflare ? undefined : '/petrov-web-design',
  vite: {
    plugins: [tailwindcss()],
  },
});
