// React
import React from "react";
// Modules
import clsx from "clsx";
// Mui-Core
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu, Sync } from "@material-ui/icons";

// Components

import styles from "./styles";
import LiveAudioSwitch from "components/LiveAudioSwitch/LiveAudioSwitch";

const SecondaryAppBar = ({
  classes,
  open,
  onClick,
  LiveAudioSwitchProps,
  ...props
}) => {
  return (
    <div className={classes.root}>
      <MuiAppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Button variant="contained" color="secondary" startIcon={<Sync />}>
            Sync
          </Button>

          <Typography
            className={classes.appTitle}
            color={"secondary"}
            variant="h6"
            noWrap
          >
            Asaron VST Rack
          </Typography>

          <Button variant="contained" color="primary">
            4800 khz
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            180 Bpm
          </Button>
          {/* <LiveAudioSwitch {...LiveAudioSwitchProps} /> */}
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default withStyles(styles)(SecondaryAppBar);
