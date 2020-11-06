import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
// import useTodoCompState from "../hooks/useTodoCompState";

export const ToDosContext = createContext();
export const DispatchToDosContext = createContext();

export function ToDoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  // const todoState = useTodoCompState([]);

  return (
    <DispatchToDosContext.Provider value={dispatch}>
      <ToDosContext.Provider value={todos}>
        {props.children}
      </ToDosContext.Provider>
    </DispatchToDosContext.Provider>
  );
}
