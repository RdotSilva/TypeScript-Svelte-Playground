<script>
  import { setContext, createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import formKey from "./formKey";

  const dispatch = createEventDispatcher();

  export let initialValues = {};
  const formStore = writable({
    values: initialValues,
    errors: {},
    showErrors: false,
  });

  setContext(formKey, formStore);
</script>

<pre>
{JSON.stringify($formStore, null, 2)}
</pre>
<form
  on:submit|preventDefault={() => {
    dispatch("submit", $formStore.values);
  }}
>
  <slot />
</form>
