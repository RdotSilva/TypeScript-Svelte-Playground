<svelte:options immutable={true} />

<script>
  import Button from "./Button.svelte";
  import { createEventDispatcher, afterUpdate } from "svelte";
  import FaRegTrashAlt from "svelte-icons/fa/FaRegTrashAlt.svelte";

  afterUpdate(() => {
    if (autoscroll) listDiv.scrollTo(0, listDivScrollHeight);
    autoscroll = false;
  });

  export let todos = [];
  let prevTodos = todos;
  let inputText = "";
  let input, listDiv, autoscroll, listDivScrollHeight;

  const dispatch = createEventDispatcher();

  $: {
    autoscroll = todos.length > prevTodos.length;
    prevTodos = todos;
  }

  export const clearInput = () => {
    inputText = "";
  };
  export const focusInput = () => {
    input.focus();
  };

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

{listDivScrollHeight}
<div class="todo-list-wrapper">
  <div class="todo-list" bind:this={listDiv} />
  <div bind:offsetHeight={listDivScrollHeight}>
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
  </div>

  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:this={input} bind:value={inputText} />
    <Button type="submit" disabled={!inputText}>Add</Button>
  </form>
</div>

<style>
  .todo-list {
    max-height: 150px;
    overflow: auto;
  }
</style>
