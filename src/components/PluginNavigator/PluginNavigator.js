import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
    color: "#D8D8D8",
  },
  treeContainer: {
    padding: 15,
  },
});

export default function PluginNavigator() {
  const classes = useStyles();

  return (
    <div className={classes.treeContainer}>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="EQ">
          <TreeItem nodeId="2" label="4020 Retro EQ" />
          <TreeItem nodeId="3" label="6020 Retro EQ" />
          <TreeItem nodeId="4" label="AE400 Active EQ" />
        </TreeItem>
        <TreeItem nodeId="5" label="Dynamics">
          <TreeItem nodeId="10" label="OSS" />
        </TreeItem>
        <TreeItem nodeId="6" label="Pitch Shift">
          <TreeItem nodeId="7" label="4033 Pitch " />
          <TreeItem nodeId="8" label="Echo" />
          <TreeItem nodeId="9" label="Distort" />
        </TreeItem>
        <TreeItem nodeId="17" label="Reverb"></TreeItem>
        <TreeItem nodeId="18" label="Delay"></TreeItem>
        <TreeItem nodeId="19" label="Modulation"></TreeItem>
      </TreeView>
    </div>
  );
}
