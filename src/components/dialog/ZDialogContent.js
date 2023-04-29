import React from 'react'
import { DialogContent } from '@material-ui/core';

function ZDialogContent(props) {
    return (
        <DialogContent {...props}>
            {props.children}
        </DialogContent>
    );
}

export default ZDialogContent;