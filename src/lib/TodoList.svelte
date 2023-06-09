<svelte:options immutable={true} />

<script>
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  export const readonly = "read only";

  export const clearInput = () => {
    inputText = "";
  };
  export const focusInput = () => {
    input.focus();
  };

  let inputText = "";
  let input;

  const dispatch = createEventDispatcher();

  const handleAddTodo = () => {
    const isNotCancelled = dispatch(
      "addtodo",
      {
        title: inputText,
      },
      { cancelable: true }
    );
    if (isNotCancelled) {
      inputText = "";
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch("removetodo", {
      id,
    });
  };
  const handleToggleTodo = (id, value) => {
    dispatch("toggletodo", {
      id,
      value,
    });
  };
</script>

<div class="todo-list-wrapper">
  <ul>
    {#each todos as { id, title, completed } (id)}
      <li>
        <label>
          <input
            on:input={(event) => {
              event.currentTarget.checked = completed;
              handleToggleTodo(id, !completed);
            }}
            type="checkbox"
            checked={completed}
          />
          {title}
        </label>
        <button on:click={() => handleRemoveTodo(id)}>Remove</button>
      </li>
    {/each}
  </ul>
  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:this={input} bind:value={inputText} />
    <Button type="submit" disabled={!inputText}>Add</Button>
  </form>
</div>
