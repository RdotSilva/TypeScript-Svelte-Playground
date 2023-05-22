<script>
  import Counter from "./lib/Counter.svelte";

  const counterProps = {
    maxCount: 10,
    initialCount: 3,
  };
</script>

<Counter {...counterProps} />

<style>
</style>
