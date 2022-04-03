import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";

function App() {
  // let todos = [new Todo("Learning React"), new Todo("Learning TypeScript")];
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learning React"),
    new Todo("Learning TypeScript"),
  ]);
  const newTodoHandler = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };
  const deleteHandler = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  return (
    <div>
      <NewTodo onAddTodo={newTodoHandler} />
      <Todos deleteHandler={deleteHandler} items={todos} />
    </div>
  );
}

export default App;
