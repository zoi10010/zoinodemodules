import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';

export default function ZRadioGroup(props) {

    return (
        <RadioGroup {...props}>
            {props.children}
        </RadioGroup>
    );
}