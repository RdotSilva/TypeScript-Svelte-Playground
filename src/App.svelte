<script>
  import Button from "./lib/Button.svelte";
  import Counter from "./lib/Counter.svelte";
  import ReactiveCounter from "./lib/ReactiveCounter.svelte";

  const counterProps = {
    maxCount: 10,
    initialCount: 3,
  };
</script>

<Button>Button Text</Button>

<Counter {...counterProps} />

<ReactiveCounter shouldCount="true" />

<style>
</style>
