import React from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@material-ui/core';

function ZDialogContent(props) {
    
    return (
        <DialogContent{...props}>
            {props.children}
        </DialogContent>
    );
}

export default ZDialogContent;