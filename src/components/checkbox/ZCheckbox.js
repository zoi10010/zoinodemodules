import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
export default function CheckboxLabels(props) {
    const classes = useStyles();

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        {...props}
                    />
                }
                label={<span>{props.name}</span>}
            />
        </div>

    );
}
const useStyles = makeStyles((theme) => ({
    formControl: {
    },


}));