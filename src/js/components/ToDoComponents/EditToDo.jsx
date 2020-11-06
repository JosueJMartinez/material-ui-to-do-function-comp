import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import useInputState from "../../hooks/useInputState";
import { ToDosContext } from "../../contexts/ToDosContext";

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function EditToDo({ todo, handleEsc, setToggleEdit }) {
  const classes = useStyles();
  const { dispatch } = useContext(ToDosContext);

  const [input, setInput] = useInputState(todo.content);

  const handleSubmit = e => {
    e.preventDefault();
    todo = { ...todo, content: input };
    dispatch({ type: "UPDATE-ITEM", updateTodo:todo });
    setToggleEdit();
  };
  console.log("Edit todo form render");
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        value={input}
        onChange={e => setInput(e.target.value)}
        id="outlined-basic"
        variant="outlined"
        fullWidth
        onKeyDown={handleEsc}
      />
    </form>
  );
}
