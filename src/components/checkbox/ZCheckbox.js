import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@mui/material/Tooltip';
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