// @ts-check
import { defineConfig } from 'astro/config';

// Deploy convention: `main` targets Vercel (base stays commented).
// The `deploy` branch uncomments `base` and is served from mmalabugin.ru/Loopstudios/.
export default defineConfig({
  base: '/Loopstudios/',
});
