import React from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogContentText } from '@material-ui/core';

function ZDialogContentText(props) {
    return (
  
                <DialogContentText {...props}>
                {props.children}
                </DialogContentText>    
    );
}

export default ZDialogContentText;