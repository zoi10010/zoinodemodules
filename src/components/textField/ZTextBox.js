import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

export default function TextBox(props) {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <TextField
                {...props}
                
            />
        </FormControl>
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%",
    },
}));

