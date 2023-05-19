<script>
  let count = 0;

  // let countClick;

  // Exclude the backets to initialize variable
  $: countClick = `You have clicked ${count} times.`;

  $: if (count > 5) {
    console.log(`Reactive state count is ${count}`);
  }

  const increment = () => {
    count += 1;
  };
</script>

<h3>{countClick}</h3>
<h3>You can clicked {count} times</h3>

<button on:click={increment}>Clicks {count}</button>

<style>
  button {
    padding: 15px 20px;
  }
</style>
