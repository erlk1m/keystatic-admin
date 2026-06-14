import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [keystatic(), react()],
  output: 'server',
});
