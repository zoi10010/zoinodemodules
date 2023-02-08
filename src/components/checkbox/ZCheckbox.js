import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels(props) {
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