import React from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@material-ui/core';

function ZDialogTitle(props) {
    return (
        <DialogTitle {...props}>
            {props.children}
        </DialogTitle>
    );
}

export default ZDialogTitle;