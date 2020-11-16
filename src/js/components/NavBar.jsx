import React, { useContext } from "react";
import { Typography, AppBar, Toolbar, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../contexts/ThemeContext";
// import theme from "../../styles/MainTheme.jsx";

const useStyles = makeStyles({
  root: {
    height: "64px",
    width: "100%",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

export default function NavBar() {
  const { isDarkMode, toggleIsDarkMode } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      color={isDarkMode ? "default" : "primary"}
      position="static"
    >
      <Toolbar>
        <Typography className={classes.title} color="inherit" variant="h4">
          To Do List!
        </Typography>
        <Switch onClick={toggleIsDarkMode} />
      </Toolbar>
    </AppBar>
  );
}
