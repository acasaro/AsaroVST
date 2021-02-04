// React
import React from "react";

// Modules
import clsx from "clsx";
// Mui-Core
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

// Components

// Styles
import styles from "./styles";

const PluginEditor = ({
  classes,
  open,
  onClick,
  LiveAudioSwitchProps,
  ...props
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.headerToolbar}>
        <Menu />
        <div>Nueral DSP Plini</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PluginEditor);
