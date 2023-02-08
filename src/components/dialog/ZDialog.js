import React from 'react'
import Dialog from '@mui/material/Dialog';

export default function ZDialog(props) {
    return (
        <Dialog {...props}>
            {props.children}
        </Dialog>
    )
}
