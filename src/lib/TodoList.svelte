<svelte:options immutable={true} />

<script>
  import Button from "./Button.svelte";
  import {
    createEventDispatcher,
    onDestroy,
    onMount,
    beforeUpdate,
    afterUpdate,
  } from "svelte";

  onMount(() => {
    console.log("Mounted");
    return () => {
      console.log("Destroyed 2");
    };
  });

  onDestroy(() => {
    console.log("Destroyed");
  });

  beforeUpdate(() => {
    if (listDiv) {
      console.log(listDiv.offsetHeight);
    }
  });

  afterUpdate(() => {
    if (autoScroll) listDiv.scrollTo(0, listDiv.scrollHeight);
    autoScroll = false;
  });

  export const readonly = "read only";

  export const clearInput = () => {
    inputText = "";
  };
  export const focusInput = () => {
    input.focus();
  };

  let inputText = "";
  let input;
  let listDiv;
  let autoScroll;

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
  <div class="todo-list" bind:this={listDiv} />
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

<style>
  .todo-list {
    max-height: 150px;
    overflow: auto;
  }
</style>
