import React, { useState, createContext } from "react";
import TodoModel from "../models/Todo";

type TodoContextObj = {
  items: TodoModel[];
  addTodo: (text: string) => void;
  deleteHandler: (id: string) => void;
};

export const TodosContext = createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  deleteHandler: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const newTodoHandler = (text: string) => {
    setTodos([...todos, new TodoModel(text)]);
  };
  const deleteHandler = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const todosContextValue: TodoContextObj = {
    items: todos,
    addTodo: newTodoHandler,
    deleteHandler,
  };

  return (
    <TodosContext.Provider value={todosContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
