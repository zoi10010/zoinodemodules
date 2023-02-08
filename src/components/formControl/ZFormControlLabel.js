import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ZFormControlLabel(props) {
    return (
        <FormControlLabel {...props}>
            {props.children}
        </FormControlLabel>

    )
}
