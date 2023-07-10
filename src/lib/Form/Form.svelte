<script>
  import { setContext } from "svelte";
  import formKey from "./formKey";

  export let initialValues = {};

  setContext(formKey, { values: initialValues });
</script>

<form>
  <slot />
</form>
