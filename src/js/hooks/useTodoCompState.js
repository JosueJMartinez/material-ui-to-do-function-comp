import { useLocalStorageState } from "./useLocalStorageReducer";

const useTodoCompState = initVal => {
  const [todos, setTodos] = useLocalStorageState(
    "AnotherToDoApp",
    initVal
  );

  return {
    todos,
    toggleItem: id => {
      const newTodos = todos.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      setTodos(newTodos);
    },
    addItem: item => {
      const newTodos = [...todos, item];
      setTodos(newTodos);
    },

    deleteItem: id => {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    },
    editItem: editTodo => {
      const newTodos = todos.map(todo =>
        editTodo.id === todo.id
          ? { ...todo, content: editTodo.content }
          : todo
      );
      setTodos(newTodos);
    },
  };
};

export default useTodoCompState;
