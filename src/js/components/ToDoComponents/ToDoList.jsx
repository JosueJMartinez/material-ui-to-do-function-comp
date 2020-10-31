import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ToDoList(props) {
  const { todos } = props;
  const classes = useStyles();

  const listToDos = () => {
    console.log(todos);
    return todos.map(item => {
      const { content, id, isScratched } = item;
      const labelId = `checkbox-list-label-${content}`;

      return (
        <ListItem
          className={classes.root}
          key={id}
          role={undefined}
          dense
          button
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              inputProps={{
                "aria-labelledby": labelId,
              }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={content} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  return <List>{listToDos()}</List>;
}
