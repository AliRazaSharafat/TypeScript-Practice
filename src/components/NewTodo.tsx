import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const todosCTX = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCTX.addTodo(enteredText);
    todoTextInputRef.current!.value = ""; // ! means we're certain that value is not null or undefined
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Enter Task</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
