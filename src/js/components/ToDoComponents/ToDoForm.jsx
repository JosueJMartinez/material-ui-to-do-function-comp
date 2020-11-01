import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { v4 as uuid } from "uuid";

import useInputState from "../../hooks/useInputState";

const useStyles = makeStyles(theme => ({ root: { width: "100%" } }));

export default function ToDoForm({ addItem }) {
  const classes = useStyles();

  const [input, setInput, reset] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { content: input, id: uuid(), isCompleted: false };
    addItem(newItem);
    reset();
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
        label="Outlined"
        variant="outlined"
        fullWidth
      />
    </form>
  );
}
