import React from 'react'
import Alert from '@mui/material/Alert';

export default function ZAlert(props) {
    return (
        <Alert {...props}>
            {props.children}
        </Alert>
    )
}
