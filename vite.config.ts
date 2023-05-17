import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     input: "src/changedEntryPoint.ts", // Example of changing entry point
  //   },
  // },
  plugins: [svelte()],
});
