import React, { useEffect } from 'react';
import clsx from 'clsx';
// API
import getSource from '../../api/source';
import { Grid, Paper } from '@material-ui/core';
import SecondaryAppBar from 'components/SecondaryAppBar';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.js';
import VolumeSlider from 'components/VolumeSlider/VolumeSlider.js';
import SimpleSelect from 'components/SimpleSelect/SimpleSelect.js';
import Mic from 'components/Mic';

function Main({ classes, ...props }) {
    const [open, setOpen] = React.useState(true);
    const [selectOptions, setSelectOptions] = React.useState([]);

    // load some sound

    useEffect(() => {
        getSelectOptions();
    }, []);

    const getSelectOptions = async () => {
        try {
            const response = await getSource();
            setSelectOptions(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(getSource());
    return (
        <div className={classes.root}>
            <SecondaryAppBar setOpen={setOpen} open={open} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                <div className={classes.drawerHeader} />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <VolumeSlider />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <SimpleSelect label="Audio In" value="audio input device" options={selectOptions} />{' '}
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <SimpleSelect label="Audio Out" value="audio input device" options={selectOptions} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Mic />
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default withStyles(styles)(Main);
