import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { withStyles } from '@mui/styles';

function ZTextBox(props) {
    const { classes } = props
    

    return (
        <FormControl className={classes.formControl}>
            <TextField
                {...props}
               variant="standard"
                InputLabelProps={{ style: { fontSize: 14 } }}
                
            />
        </FormControl>
    )
}

const styles = theme => ({
    formControl: {
        width: "100%"
    },
    textStyle: {
        fontSize: 10
    }
});

export default withStyles(styles)(ZTextBox);
