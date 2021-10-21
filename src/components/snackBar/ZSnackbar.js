import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';

export default function ZSnackbar(props) {
    return (
        <Snackbar {...props}>
            {props.children}
        </Snackbar>
    )
}
