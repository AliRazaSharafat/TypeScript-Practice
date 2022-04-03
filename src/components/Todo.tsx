import React from "react";

const Todo: React.FC<{
  text: string;
  deleteHandler: () => void;
}> = (props) => {
  return (
    <li style={{ cursor: "pointer" }} onClick={props.deleteHandler}>
      {props.text}
    </li>
  );
};

export default Todo;
