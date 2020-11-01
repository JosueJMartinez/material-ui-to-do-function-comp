import React, { useState } from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import ToDoList from "./ToDoComponents/ToDoList";
import ToDoForm from "./ToDoComponents/ToDoForm";

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
    { content: "test here", id: "asdghheruiwrh", isCompleted: true },
    { content: "another test", id: "asddghheruiwrh", isCompleted: false },
    {
      content: "and another one",
      id: "asgdghheruiwrh",
      isCompleted: false,
    },
  ];

  const [state, setState] = useState({
    todos: [...initialValues],
    isOpen: false,
  });

  const { todos, isOpen } = state;

  const [isComplete, setIsComplete] = useState(false);

  const toggleItem = id => {
    const todos = state.todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setState(prevState => ({ ...prevState, todos }));
  };

  const addItem = item => {
    setState(prevState => {
      const { todos } = prevState;
      todos.push(item);
      return { ...prevState, todos };
    });
  };

  const deleteItem = id => {
    const todos = state.todos.filter(todo => todo.id !== id);
    setState(prevState => ({ ...prevState, todos }));
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="primary" position="static">
        <Toolbar>
          <Typography color="inherit" variant="h4">
            Oh No another list!!!
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
          <ToDoForm addItem={addItem} />
          <ToDoList
            todos={todos}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        </Grid>
      </Grid>
    </div>
  );
}
