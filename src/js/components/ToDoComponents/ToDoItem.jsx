import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  listItemText: {
    textDecoration: isCompleted => (isCompleted ? "line-through" : ""),
  },
}));

export default function ToDoItem({
  content,
  id,
  isCompleted,
  deleteItem,
  toggleItem,
}) {
  const classes = useStyles(isCompleted);
  const labelId = `checkbox-list-label-${content}`;

  const handleEditClick = e => {
    console.log("edit");
  };

  return (
    <ListItem
      className={classes.root}
      key={id}
      role={undefined}
      dense
      button
    >
      <ListItemText
        id={labelId}
        primary={content}
        onClick={() => toggleItem(id)}
        className={classes.listItemText}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="start"
          aria-label="edit"
          onClick={handleEditClick}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteItem(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
