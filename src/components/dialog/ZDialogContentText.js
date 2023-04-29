import React from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogContentText } from '@material-ui/core';

function ZDialogContentText(props) {
    return (
  
            <Dialog >
                <DialogContentText>{...props}</DialogContentText>
                {props.children}
            </Dialog>
    
    );
}

export default ZDialogContentText;