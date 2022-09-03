import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { withStyles } from '@mui/styles';
import Skeleton from '@mui/material/Skeleton';

function TextBox(props) {
    const { classes } = props

    return (
        <FormControl className={classes.formControl}>
            {props.isLoading ?
                <Skeleton height={20} variant="rect"></Skeleton>
                :
                <TextField
                    {...props}
                />
            }
        </FormControl>
    )
}

const styles = theme => ({
    formControl: {
        width: "100%",
    },
});

export default withStyles(styles)(TextBox)
