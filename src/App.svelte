<script>
  import { tippyAction } from "./lib/actions/tippy";

  let content = "Hello";
</script>

<input bind:value={content} />

<button use:tippyAction={{ content, placement: "right", theme: "light" }}
  >Button</button
>

<style>
</style>
