import React, { createContext } from "react";
import todoReducer from "../reducers/todo.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

export const ToDosContext = createContext();
export const DispatchToDosContext = createContext();

export function ToDoProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "AnotherToDoApp",
    [],
    todoReducer
  );

  return (
    <DispatchToDosContext.Provider value={dispatch}>
      <ToDosContext.Provider value={todos}>
        {props.children}
      </ToDosContext.Provider>
    </DispatchToDosContext.Provider>
  );
}
