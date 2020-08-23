// React
import React from "react";
// Modules
import clsx from "clsx";
// Mui-Core
import { withStyles } from "@material-ui/core/styles";
import { AppBar as MuiAppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

// Components
import Drawer from "components/Drawer";
import styles from "./styles";

const SecondaryAppBar = ({ classes, ...props }) => {
	const handleDrawerOpen = () => {
		props.setOpen(true);
	};

	const handleDrawerClose = () => {
		props.setOpen(false);
	};
	return (
		<>
			<MuiAppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: props.open,
				})}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, props.open && classes.hide)}>
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap>
						VST Name
					</Typography>
				</Toolbar>
			</MuiAppBar>
			<Drawer open={props.open} onClick={handleDrawerClose} />
		</>
	);
};

export default withStyles(styles)(SecondaryAppBar);
