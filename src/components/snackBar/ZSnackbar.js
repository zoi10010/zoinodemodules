import React from 'react'
import Snackbar from '@mui/material/Snackbar';

export default function ZSnackbar(props) {
    return (
        <Snackbar {...props}>
            {props.children}
        </Snackbar>
    )
}
