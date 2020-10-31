import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar } from "@material-ui/core";
import Grid from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ToDoList from "./ToDoComponents/ToDoList";
import ToDoForm from "./ToDoComponents/ToDoForm";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0",
    margin: "0",
    height: "100vh",
    backgroundColor: "#fafafa",
  },
  appBar: {
    height: "64px",
  },
  main: {
    margin: "auto",
    marginTop: "30px",
    width: "100%",
    maxWidth: 360,
  },
  todoTitle: {
    padding: "10px",
  },
}));

export default function ToDoComponent() {
  const classes = useStyles();

  const initialValues = [
    { content: "test here", id: "asdghheruiwrh", isScratched: false },
    { content: "another test", id: "asddghheruiwrh", isScratched: false },
    {
      content: "and another one",
      id: "asgdghheruiwrh",
      isScratched: false,
    },
  ];

  const [state, setState] = useState({
    todos: [...initialValues],
    isOpen: false,
  });

  const { todos, isOpen } = state;

  const addItem = item => {
    setState(prevState => {
      const todos = prevState.todos;
      todos.push(item);
      return { ...prevState, todos };
    });
  };

  console.log(todos);

  return (
    <Paper className={classes.root} elevation={3}>
      <AppBar className={classes.appBar} color="primary" position="static">
        <Toolbar>
          <Typography color="inherit" variant="h4">
            Grocery List
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.main}>
        <Typography variant="h5" className={classes.todoTitle}>
          Need to Buy
        </Typography>
        <ToDoForm addItem={addItem} />
        <ToDoList todos={todos} />
      </Paper>
    </Paper>
  );
}
