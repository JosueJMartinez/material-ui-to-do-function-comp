import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import EditToDo from "./EditToDo";
import useToggleState from "../../hooks/useToggleState";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "12px",
    paddingBottom: "12px",
    height: "4rem",
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
  editItem,
}) {
  const classes = useStyles(isCompleted);
  const labelId = `checkbox-list-label-${content}`;

  const [toggleEditBtn, setToggleEditBtn] = useToggleState();

  const handleEditItem = editTodo => {
    setToggleEditBtn();
    editItem(editTodo);
  };

  const toggleEditForm = toggleEditBtn ? (
    <ListItemText>
      <EditToDo
        todo={{ content, id, isCompleted }}
        editItem={handleEditItem}
      />
    </ListItemText>
  ) : (
    <ListItemText id={labelId} className={classes.listItemText}>
      {content}
    </ListItemText>
  );

  const handleEditToggle = e => {
    e.stopPropagation();
    setToggleEditBtn();
  };

  return (
    <ListItem
      className={classes.root}
      key={id}
      role={undefined}
      dense
      button={!toggleEditBtn}
      onClick={!toggleEditBtn ? () => toggleItem(id) : () => {}}
    >
      {toggleEditForm}

      <ListItemSecondaryAction>
        {!toggleEditBtn && (
          <IconButton
            edge="start"
            aria-label="edit"
            onClick={handleEditToggle}
          >
            <EditIcon />
          </IconButton>
        )}
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
