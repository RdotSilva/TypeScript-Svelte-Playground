import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import preprocess from "svelte-preprocess";

export const config = {
  preprocess: preprocess({
    scss: {},
  }),
};

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
};
