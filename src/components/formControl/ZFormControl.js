import React from 'react'
import FormControl from '@mui/material/FormControl';

export default function ZFormControl(props) {
    return (
        <FormControl {...props}>
            {props.children}
        </FormControl>
    )
}
