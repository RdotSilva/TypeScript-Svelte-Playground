<script>
  import Button from "./lib/Button.svelte";
  import Counter from "./lib/Counter.svelte";
  import ReactiveCounter from "./lib/ReactiveCounter.svelte";
  import DiBower from "svelte-icons/di/DiBower.svelte";

  const counterProps = {
    maxCount: 10,
    initialCount: 3,
  };
</script>

<Button size="small" shadow bgColor="red" textColor="blue">
  <div style:width="20px" slot="leftContent"><DiBower /></div>
  Button Text</Button
>

<Counter {...counterProps} />

<ReactiveCounter shouldCount="true" />

<style>
</style>
