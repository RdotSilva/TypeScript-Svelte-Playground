<script>
  import TodoList from "./lib/TodoList.svelte";
  import { v4 as uuid } from "uuid";
  import { tick, onMount } from "svelte";

  let todoList;
  let showList = true;

  let todos = null;
  let error = null;
  let isLoading = false;
  let isAdding = false;

  onMount(() => {
    loadTodos();
  });

  const loadTodos = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      async (response) => {
        if (response.ok) {
          todos = await response.json();
        } else {
          throw new Error("An error has occurred.");
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

    isAdding = true;

    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: event.detail.title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async (response) => {
      if (response.ok) {
        const todo = await response.json();
        todos = [...todos, { ...todo, id: uuid() }];

        todoList.clearInput();
      } else {
        alert("An error has occurred.");
      }
    });

    isAdding = false;
    await tick();
    todoList.focusInput();
  };

  /**
   * Remove a TODO item from the list
   * @param event The browser event
   */
  const handleRemoveTodo = async (event) => {
    const id = event.detail.id;

    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        todos = todos.filter((t) => t.id !== event.detail.id);
      } else {
        alert("An error has occurred.");
      }
    });
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
  <div style:max-width="400px">
    <TodoList
      {todos}
      {error}
      {isLoading}
      disableAdding={isAdding}
      bind:this={todoList}
      on:addtodo={handleAddTodo}
      on:removetodo={handleRemoveTodo}
      on:toggletodo={handleToggleTodo}
    />
  </div>
{/if}

<style>
</style>
