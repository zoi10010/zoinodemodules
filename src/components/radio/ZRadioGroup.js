import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';

export default function ZRadioGroup(props) {

    return (
        <RadioGroup {...props}>
            {props.children}
        </RadioGroup>
    );
}