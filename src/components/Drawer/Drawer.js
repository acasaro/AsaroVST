// React
import React from "react";
// Modules
// Mui-Core
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { Save } from "@material-ui/icons";

// Components
import PluginNavigator from "components/PluginNavigator";
import styles from "./styles";
const Drawer = ({ classes, open = true, onClick, ...props }) => {
  return (
    <div className={classes.drawer}>
      <div className={classes.header}>Patch Editor</div>
      {/* @TO DO: MAKE A COMPONENT */}
      <div className={classes.drawerToolbar}>
        <Button className={classes.toolButton}>Copy</Button> |
        <Button className={classes.toolButton}>Paste</Button> |
        <Button className={classes.toolButton}>Import</Button> |
        <Button className={classes.toolButton}>Export</Button>
      </div>
      <List>
        {["Heavy Distortion Channel", "Patch 2", "Patch 3", "Patch 4"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
              <ListItemIcon>{index === 0 ? <Save /> : ""}</ListItemIcon>
            </ListItem>
          )
        )}
      </List>
      <div className={classes.header}>Plugins</div>
      {/* @TO DO: MAKE A COMPONENT */}
      <div className={classes.drawerToolbarSecondary}>
        <Button className={classes.toolButton}>Scan</Button> |
        <Button className={classes.toolButton}>Path</Button>
      </div>
      <PluginNavigator />
    </div>
  );
};

export default withStyles(styles)(Drawer);
