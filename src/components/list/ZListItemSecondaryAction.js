import React from 'react'
import { ListItemSecondaryAction } from '@mui/material';

export default function ZListItemSecondaryAction(props) {
    return (
        <ListItemSecondaryAction {...props}>
            {props.children}
        </ListItemSecondaryAction>
    )
}
