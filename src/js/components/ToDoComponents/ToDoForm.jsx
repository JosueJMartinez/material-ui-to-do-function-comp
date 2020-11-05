import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Paper } from "@material-ui/core";
import { v4 as uuid } from "uuid";

import useInputState from "../../hooks/useInputState";
import { ToDosContext } from "../../contexts/ToDosContext";

const useStyles = makeStyles(theme => ({
  root: { width: "100%" },
}));

export default function ToDoForm() {
  const classes = useStyles();

  const [input, setInput, reset] = useInputState("");
  const { addItem } = useContext(ToDosContext);

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { content: input, id: uuid(), isCompleted: false };
    addItem(newItem);
    reset();
  };

  return (
    <Paper elevation={3}>
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
          label="List of things to do"
          variant="outlined"
          fullWidth
        />
      </form>
    </Paper>
  );
}
