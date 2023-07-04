import { derived } from "svelte/store";
import settings from "./settings";
import location from "./location";

const direction = derived(settings, ($settings) => {
  return $settings.language === "ar" ? "rtl" : "ltr";
});

export default direction;
