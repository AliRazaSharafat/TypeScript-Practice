import React, { useState, createContext } from "react";

export const TodosContext = createContext<{}>({
  items: [],
  addTodo: (text: string) => {},
  deleteHandler: (id: string) => {},
});
