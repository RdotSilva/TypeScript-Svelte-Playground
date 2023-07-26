<script>
  import { onMount } from "svelte";
  import Konva from "konva";

  let container;

  onMount(() => {
    const stage = new Konva.Stage({
      container,
      width: 300,
      height: 400,
    });
  });
</script>

<div bind:this={container} />
