import React, { useContext, memo } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
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
import { DispatchToDosContext } from "../../contexts/ToDosContext";

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

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTypography: {
      // Name of the rule
      body2: {
        // Some CSS
        fontSize: "1rem",
      },
    },
  },
});

function ToDoItem({ content, id, isCompleted }) {
  const classes = useStyles(isCompleted);

  const labelId = `checkbox-list-label-${content}`;

  const [toggleEdit, setToggleEdit] = useToggleState();
  const dispatch = useContext(DispatchToDosContext);

  const handleEsc = e => {
    if (e.keyCode === 27) setToggleEdit();
  };

  const handleEditToggle = e => {
    e.stopPropagation();
    setToggleEdit();
  };

  const toggleEditForm = toggleEdit ? (
    <ListItemText>
      <EditToDo
        todo={{ content, id, isCompleted }}
        handleEsc={handleEsc}
        setToggleEdit={setToggleEdit}
      />
    </ListItemText>
  ) : (
    <ThemeProvider theme={theme}>
      <ListItemText id={labelId} className={classes.listItemText}>
        {content}
      </ListItemText>
    </ThemeProvider>
  );

  return (
    <ListItem
      className={classes.root}
      key={id}
      role={undefined}
      dense
      button={!toggleEdit}
      onClick={
        !toggleEdit
          ? () => dispatch({ type: "TOGGLE-ITEM", id })
          : () => {}
      }
    >
      {toggleEditForm}
      {!toggleEdit && (
        <ListItemSecondaryAction>
          <IconButton
            edge="start"
            aria-label="edit"
            onClick={handleEditToggle}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch({ type: "DELETE-ITEM", id })}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

export default memo(ToDoItem);
