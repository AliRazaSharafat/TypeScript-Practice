import React from "react";

const Todo: React.FC<{
  text: string;
  id: string;
  deleteHandler: (id: string) => void;
}> = (props) => {
  return (
    <li
      style={{ cursor: "pointer" }}
      onClick={() => props.deleteHandler(props.id)}
    >
      {props.text}
    </li>
  );
};

export default Todo;
