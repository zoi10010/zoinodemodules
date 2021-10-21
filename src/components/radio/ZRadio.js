import React from 'react';
import Radio from '@material-ui/core/Radio';

export default function ZRadio(props) {

    return (
        <Radio {...props}>
            {props.children}
        </Radio>
    );
}