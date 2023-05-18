<script>
  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>Clicks {count}</button>

<style>
  button {
    padding: 15px 20px;
  }
</style>
