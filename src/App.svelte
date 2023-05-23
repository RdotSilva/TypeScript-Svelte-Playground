<script>
  import Counter from "./lib/Counter.svelte";
  import ReactiveCounter from "./lib/ReactiveCounter.svelte";

  const counterProps = {
    maxCount: 10,
    initialCount: 3,
  };
</script>

<Counter {...counterProps} />

<ReactiveCounter shouldCount="true" />

<style>
</style>
