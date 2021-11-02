import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

export default function TextBox(props) {
    const classes = useStyles();

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

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%",
    },
}));

