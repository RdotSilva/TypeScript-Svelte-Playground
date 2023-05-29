<script>
  export let size = "small";
  export let shadow = false;
</script>

<button class:size-lg={size === "large"} class:size-sm={size === "small"}>
  <slot>Fallback</slot>
</button>

<style lang="scss">
  @use "../../src/styles/variables.scss";
  button {
    border: none;
    background-color: #ff3e00;
    color: #ffffff;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &.size-sm {
      padding: 15px 20px;
    }
    &.size-lg {
      padding: 20px 25px;
    }
  }
</style>
