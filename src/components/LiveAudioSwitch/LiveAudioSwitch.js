import React, { useEffect } from 'react';
import { Switch, FormControlLabel, FormGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// Utilities

import styles from './styles';

const LiveAudioSwitch = ({ classes, onChange, currentValue, ...props }) => {
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={currentValue}
                        onChange={(e) => onChange({ value: e.target.checked })}
                        name="toggleLive"
                    />
                }
                label="Broadcast"
            />
        </FormGroup>
    );
};

export default withStyles(styles)(LiveAudioSwitch);
