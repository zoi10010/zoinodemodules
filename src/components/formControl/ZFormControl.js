import React from 'react'
import FormControl from '@material-ui/core/FormControl';

export default function ZFormControl(props) {
    return (
        <FormControl {...props}>
            {props.children}
        </FormControl>
    )
}
