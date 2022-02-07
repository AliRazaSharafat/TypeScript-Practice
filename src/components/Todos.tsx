import React from "react";
import TodoModel from "../models/Todo";
import Todo from "./Todo";

const Todos: React.FC<{ items: TodoModel[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <Todo text={item.text} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
