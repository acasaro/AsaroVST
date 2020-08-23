// React
import React from "react";
// Modules
import clsx from "clsx";
// Mui-Core
import { withStyles } from "@material-ui/core/styles";
import {
	Drawer as MuiDrawer,
	IconButton,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight, SettingsInputSvideo, SettingsInputComponent } from "@material-ui/icons";

// Components
import styles from "./styles";

const Drawer = ({ classes, open, onClick, ...props }) => {
	return (
		<MuiDrawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper,
			}}>
			<div className={classes.drawerHeader}>
				<IconButton onClick={onClick}>{props.open ? <ChevronLeft /> : <ChevronRight />}</IconButton>
			</div>
			<Divider />
			<List>
				{["Patch Editor", "Plugins"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <SettingsInputSvideo /> : <SettingsInputComponent />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</MuiDrawer>
	);
};

export default withStyles(styles)(Drawer);
