import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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
  mainComponent: {
    marginTop: "64px",
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
      const { todos } = prevState;
      todos.push(item);
      return { ...prevState, todos };
    });
  };

  const deleteItem = id => {
    setState(prevState => {
      const todos = prevState.todos.filter(todo => todo.id !== id);
      return { ...prevState, todos };
    });
  };

  console.log(todos);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="primary" position="static">
        <Toolbar>
          <Typography color="inherit" variant="h4">
            Grocery List
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid
          item
          xs={11}
          sm={10}
          md={6}
          lg={4}
          className={classes.mainComponent}
        >
          <Paper elevation={3}>
            <Typography variant="h5" className={classes.todoTitle}>
              Need to Buy
            </Typography>
            <ToDoForm addItem={addItem} />
          </Paper>
          <ToDoList todos={todos} deleteItem={deleteItem} />
        </Grid>
      </Grid>
    </div>
  );
}
