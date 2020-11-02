import React, { useEffect } from "react";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ToDoList from "./ToDoComponents/ToDoList";
import ToDoForm from "./ToDoComponents/ToDoForm";
import useTodoCompState from "../hooks/useTodoCompState";

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

  const initVal = JSON.parse(
    localStorage.getItem("AnotherToDoApp") || "[]"
  );

  const {
    todos,
    addItem,
    deleteItem,
    toggleItem,
    editItem,
  } = useTodoCompState(initVal);

  useEffect(() => {
    localStorage.setItem("AnotherToDoApp", JSON.stringify(todos));
    return () => {};
  }, [todos]);

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
            editItem={editItem}
          />
        </Grid>
      </Grid>
    </div>
  );
}
