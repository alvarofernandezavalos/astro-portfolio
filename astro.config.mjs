import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [tailwind()],
  output: "server",
  adapter: vercel()
});