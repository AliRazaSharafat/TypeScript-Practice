import React from "react";
import TodoModel from "../models/Todo";
import Todo from "./Todo";

const Todos: React.FC<{
  items: TodoModel[];
  deleteHandler: (id: string) => void;
}> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <Todo
            text={item.text}
            id={item.id}
            deleteHandler={props.deleteHandler}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
