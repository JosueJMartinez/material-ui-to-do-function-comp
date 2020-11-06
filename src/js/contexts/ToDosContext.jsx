import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
import useTodoCompState from "../hooks/useTodoCompState";

export const ToDosContext = createContext();

export function ToDoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  // const todoState = useTodoCompState([]);

  return (
    <ToDosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </ToDosContext.Provider>
  );
}
