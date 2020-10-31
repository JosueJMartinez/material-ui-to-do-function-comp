import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
	main:{
		margin:'auto',
		marginTop:'30px',
		width: "100%",
    maxWidth: 360,
	}
}));

export default function ToDo() {
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

  return (
    <Paper className={classes.root} elevation={3}>
      <AppBar className={classes.appBar} color="primary" position="static">
        <Toolbar>
          <Typography color="inherit">ToDo List React Hooks</Typography>
        </Toolbar>
      </AppBar>
			<Paper className={classes.main}> 
				<ToDoForm />
				<ToDoList todos={todos} />
			</Paper>
    </Paper>
  );
}
