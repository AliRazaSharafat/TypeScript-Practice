import React, { useContext } from "react";
import Todo from "./Todo";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todosCTX = useContext(TodosContext);
  return (
    <div>
      <ul>
        {todosCTX.items.map((item) => (
          <Todo
            text={item.text}
            deleteHandler={todosCTX.deleteHandler.bind(null, item.id)}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
