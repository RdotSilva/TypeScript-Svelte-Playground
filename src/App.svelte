<script>
  import TodoList from "./lib/TodoList.svelte";
  import { v4 as uuid } from "uuid";

  let todos = [
    {
      id: uuid(),
      title: "Todo 1",
      completed: true,
    },
    {
      id: uuid(),
      title: "Todo 2",
      completed: false,
    },
    {
      id: uuid(),
      title: "Todo 3",
      completed: true,
    },
  ];

  /**
   * Add a TODO item to the list
   * @param event The browser event
   */
  const handleAddTodo = (event) => {
    // event.preventDefault();
    todos = [
      ...todos,
      {
        id: uuid(),
        title: event.detail.title,
        completed: false,
      },
    ];
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

<TodoList {todos} on:addtodo={handleAddTodo} on:removetodo={handleRemoveTodo} />

<style>
</style>
