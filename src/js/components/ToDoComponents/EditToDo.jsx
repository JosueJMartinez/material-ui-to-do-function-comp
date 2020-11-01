import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import useInputState from "../../hooks/useInputState";

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function EditToDo({ todo, editItem }) {
  const classes = useStyles();

  const [input, setInput] = useInputState(todo.content);

  const handleSubmit = e => {
    e.preventDefault();

    todo = { ...todo, content: input };

    editItem(todo);
  };

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
        // label="List of things to do"
        variant="outlined"
        fullWidth
      />
    </form>
  );
}
