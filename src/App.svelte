<script>
  import Home from "./lib/pages/Home.svelte";
  import Settings from "./lib/pages/Settings.svelte";
</script>

<svelte:window
  on:hashchange={() => {
    console.log("Hash Changed");
  }}
/>

<nav>
  <a href="#/">Home</a>
  <a href="#/settings">Setting</a>
</nav>

{#if page === "home"}
  <Home />
{:else if page === "settings"}
  <Settings />
{/if}

<style>
</style>
