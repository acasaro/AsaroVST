import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SimpleSelect({ label, options = [], field, onChange, ...props }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={props.value}
                    labelWidth={150}
                    label={props.label}
                    onChange={(e) => onChange({ field: field, device: e.target.value })}>
                    {options.map((option, index) => (
                        <MenuItem key={`${option.kind}-${index}`} value={option}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
export default SimpleSelect;
