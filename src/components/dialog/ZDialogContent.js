import React from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@material-ui/core';

function ZDialogContent(props) {
    return (
       
            <Dialog >
                <DialogContent>{...props}</DialogContent>
                {props.children}
            </Dialog>
        
    );
}

export default ZDialogContent;