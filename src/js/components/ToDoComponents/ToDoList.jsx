import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Paper, Typography } from "@material-ui/core";

import ToDoItem from "./ToDoItem";
import { ToDosContext } from "../../contexts/ToDosContext";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px",
  },
  emptyList: {
    padding: "10px",
  },
}));

export default function ToDoList() {
  const classes = useStyles();
  const todos = useContext(ToDosContext);

  const listToDos = () => {
    return todos.map(item => {
      return <ToDoItem {...item} key={item.id} />;
    });
  };

  const displayList = () => {
    const isListEmpty = todos.length;

    if (isListEmpty) return <List>{listToDos()}</List>;

    return (
      <Typography variant="h6" className={classes.emptyList}>
        List is Empty
      </Typography>
    );
  };

  return (
    <Paper className={classes.root} elevation={5}>
      {displayList()}
    </Paper>
  );
}
