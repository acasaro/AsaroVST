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

function SimpleSelect({ label, options = [], ...props }) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    console.log(options);
    return (
        <div className={classes.root}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="outlined-label">{label}</InputLabel>
                <Select
                    labelId="outlined-label"
                    id="demo-simple-select-outlined"
                    value={value}
                    onChange={handleChange}
                    label={label}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option, index) => (
                        <MenuItem value={option.name}>{option.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
export default SimpleSelect;
