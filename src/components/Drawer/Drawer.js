// React
import React from 'react';
// Modules
// Mui-Core
import { withStyles } from '@material-ui/core/styles';
import {
    Drawer as MuiDrawer,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import {
    ChevronLeft,
    ChevronRight,
    SettingsInputSvideo,
    SettingsInputComponent,
    LeakAdd,
    SpeakerPhone,
    Tune,
    RssFeed,
} from '@material-ui/icons';

// Components
import styles from './styles';

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
                <IconButton onClick={onClick}>{open ? <ChevronLeft /> : <ChevronRight />}</IconButton>
            </div>
            <Divider />
            <List>
                {['Audio Stream', 'Plugins'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <SpeakerPhone /> : <Tune />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </MuiDrawer>
    );
};

export default withStyles(styles)(Drawer);
