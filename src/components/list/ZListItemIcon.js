import React from 'react'
import { ListItemIcon } from '@mui/material';

export default function ZListItemIcon(props) {
    return (
        <ListItemIcon {...props}>
            {props.children}
        </ListItemIcon>
    )
}
