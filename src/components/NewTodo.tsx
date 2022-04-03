import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
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
