// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        context: "server",
        access: "public",
        default: false,
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  output: "server",
  adapter: vercel(),
});