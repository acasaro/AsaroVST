import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function VolumeSlider({ ...props }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onChange({ value });
    };

    return (
        <div className={classes.root}>
            <Typography id="continuous-slider" color={'secondary'} gutterBottom>
                Volume
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown color={'secondary'} />
                </Grid>
                <Grid item xs>
                    <Slider {...props} value={value} onChange={handleChange} color={'secondary'} />
                </Grid>
                <Grid item>
                    <VolumeUp color={'secondary'} />
                </Grid>
            </Grid>
        </div>
    );
}
