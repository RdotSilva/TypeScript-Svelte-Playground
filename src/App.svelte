<script>
  import TodoList from "./lib/TodoList.svelte";
  import { v4 as uuid } from "uuid";
  import { tick } from "svelte";

  let todoList;
  let showList = true;

  let todos = null;
  let error = null;
  let isLoading = false;

  const loadTodos = async () => {
    isLoading = true;
    await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      async (response) => {
        if (response.ok) {
          todos = await response.json();
        } else {
          error = "An error has occurred";
        }
      }
    );
    isLoading = false;
  };

  /**
   * Add a TODO item to the list
   * @param event The browser event
   */
  const handleAddTodo = async (event) => {
    event.preventDefault();

    todos = [
      ...todos,
      {
        id: uuid(),
        title: event.detail.title,
        completed: false,
      },
    ];
    await tick();

    todoList.clearInput();
  };

  /**
   * Remove a TODO item from the list
   * @param event The browser event
   */
  const handleRemoveTodo = (event) => {
    todos = todos.filter((todo) => todo.id !== event.detail.id);
  };

  /**
   * Toggle a TODO item
   * @param event The browser event
   */
  const handleToggleTodo = (event) => {
    todos = todos.map((todo) => {
      if (todo.id === event.detail.id) {
        return { ...todo, completed: event.detail.value };
      }
      return { ...todo };
    });
  };
</script>

<label>
  <input type="checkbox" bind:checked={showList} />
  Show/Hide list
</label>
{#if showList}
  {#await loadTodos then todos}
    <div style:max-width="200px">
      <TodoList
        {todos}
        bind:this={todoList}
        on:addtodo={handleAddTodo}
        on:removetodo={handleRemoveTodo}
        on:toggletodo={handleToggleTodo}
      />
    </div>
  {/await}
{/if}

<style>
</style>
