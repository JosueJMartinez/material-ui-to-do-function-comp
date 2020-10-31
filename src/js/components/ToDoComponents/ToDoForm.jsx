import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles(theme => ({ root: { width: "100%" } }));

export default function ToDoForm(props) {
  const classes = useStyles();

  const [input, setInput] = useState("");

  const { addItem } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { content: input, id: uuid(), isScratched: false };
    addItem(newItem);
    setInput("");
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
