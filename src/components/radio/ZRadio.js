import React from 'react';
import Radio from '@mui/material/Radio';

export default function ZRadio(props) {

    return (
        <Radio {...props}>
            {props.children}
        </Radio>
    );
}