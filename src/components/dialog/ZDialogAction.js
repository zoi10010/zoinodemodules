import React from 'react';
import { DialogActions } from '@mui/material';

export default function ZDialogAction(props) {
    return (
        <DialogActions{...props}>
            {props.children}
        </DialogActions>
    )
}