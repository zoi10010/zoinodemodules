import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ZRadioGroup(props) {

    return (
        <FormControlLabel
            control={
                <RadioGroup {...props}>
                    {props.children}    
                </RadioGroup>
            }
            label={props.name}
         />
    );
}