import React from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@material-ui/core';

function ZDialogTitle(props) {
    return (
        <div>
            <Dialog >
                <DialogTitle>{...props}</DialogTitle>
                {props.children}
            </Dialog>
        </div>
    );
}

export default ZDialogTitle;