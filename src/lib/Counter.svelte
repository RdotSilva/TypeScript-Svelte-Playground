<script>
  // Adding props
  export let initialCount;
  export let maxCount;

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

  // Won't work as the count values are not reactive
  $: countTotal = `The count total is ${getTotal()}`;

  // let countClick;

  // Exclude the backets to initialize variable
  $: countClick = `You have clicked ${count} times.`;

  $: if (count > 5) {
    console.log(`Reactive state count is ${count}`);
  }

  const increment = () => {
    count += 1;
  };

  const incrementTwo = () => {
    count += 1;
  };
</script>

<h3>{countClick}</h3>
<h3>You can clicked {count} times</h3>

<button on:click={increment}>Clicks {count}</button>
<button on:click={incrementTwo}>Clicks {countTwo}</button>

<style>
  button {
    padding: 15px 20px;
  }
</style>
