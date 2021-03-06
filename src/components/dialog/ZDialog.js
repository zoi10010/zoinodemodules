import React from 'react'
import Dialog from '@material-ui/core/Dialog';

export default function ZDialog(props) {
    return (
        <Dialog {...props}>
            {props.children}
        </Dialog>
    )
}
