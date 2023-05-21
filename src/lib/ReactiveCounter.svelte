<script>
  let count = 0;
  let countTwo = 0;

  const setCountTwo = (newCount) => {
    countTwo = newCount;
  };

  // Order of the statements is important
  $: setCountTwo(count);
  $: countTwoTotal = `countTwo is ${countTwo}`;

  const getTotal = () => {
    return count + countTwo;
  };

  const increment = () => {
    count += 1;
  };

  const incrementTwo = () => {
    count += 1;
  };
</script>

<h3>You can clicked {count} times</h3>

<button on:click={increment}>Clicks {count}</button>
<button on:click={incrementTwo}>Clicks {countTwo}</button>

<style>
  button {
    padding: 15px 20px;
  }
</style>
