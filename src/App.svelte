<script>
  import { onMount } from "svelte";
  import tippy from "tippy.js";
  import "tippy.js/dist/tippy.css";

  let button;
</script>

<button class="tooltip">Button</button>
<button class="tooltip" data-tippy-content="some other text">Button</button>

<button bind:this={button}>Button</button>

<style>
</style>
