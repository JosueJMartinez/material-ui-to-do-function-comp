import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Paper, Typography } from "@material-ui/core";

import ToDoItem from "./ToDoItem";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px",
  },
  emptyList: {
    padding: "10px",
  },
}));

export default function ToDoList({ todos, deleteItem, toggleItem }) {
  const classes = useStyles();

  const listToDos = () => {
    return todos.map(item => {
      return (
        <ToDoItem
          {...item}
          key={item.id}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      );
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
