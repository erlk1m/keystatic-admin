import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [keystatic(), react()],
  output: 'server',
  adapter: vercel(),
});
