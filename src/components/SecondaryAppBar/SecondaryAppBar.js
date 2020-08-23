// React
import React from 'react';
// Modules
import clsx from 'clsx';
// Mui-Core
import { withStyles } from '@material-ui/core/styles';
import { AppBar as MuiAppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

// Components
import Drawer from 'components/Drawer';
import styles from './styles';
import LiveAudioSwitch from 'components/LiveAudioSwitch/LiveAudioSwitch';

const SecondaryAppBar = ({ classes, open, onClick, LiveAudioSwitchProps, ...props }) => {
    return (
        <div className={classes.root}>
            <MuiAppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={(e) => onClick({ setOpen: true })}
                        edge="start"
                        className={clsx(classes.menuButton, props.open && classes.hide)}>
                        <Menu />
                    </IconButton>
                    <Typography className={classes.appTitle} color={'secondary'} variant="h6" noWrap>
                        AsaronVST
                    </Typography>
                    <LiveAudioSwitch {...LiveAudioSwitchProps} />
                </Toolbar>
            </MuiAppBar>
            <Drawer open={open} onClick={(e) => onClick({ setOpen: false })} />
        </div>
    );
};

export default withStyles(styles)(SecondaryAppBar);
