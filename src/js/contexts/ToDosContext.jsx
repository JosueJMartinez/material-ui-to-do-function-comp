import React, { createContext } from "react";
import useTodoCompState from "../hooks/useTodoCompState";

export const ToDosContext = createContext();

export function ToDoProvider(props) {
  const todoState = useTodoCompState([]);

  return (
    <ToDosContext.Provider value={todoState}>
      {props.children}
    </ToDosContext.Provider>
  );
}
