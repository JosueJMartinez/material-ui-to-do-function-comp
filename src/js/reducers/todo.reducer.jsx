const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      return [...state, action.item];
    case "DELETE-ITEM":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE-ITEM":
      return state.map(item =>
        item.id === action.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    case "UPDATE-ITEM":
      return state.map(todo =>
        action.updateTodo.id === todo.id
          ? { ...todo, content: action.updateTodo.content }
          : todo
      );
    default:
      return state;
  }
};

export default reducer;
