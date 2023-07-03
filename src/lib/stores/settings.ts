import { writable } from "svelte/store";

const createSettingsStore = () => {
  const { subscribe } = writable({
    colorScheme: "dark",
    language: "en",
    fontSize: 12,
  });

  return {
    subscribe,
  };
};

export default createSettingsStore;
