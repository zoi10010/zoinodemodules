import React from 'react'
import { ListItemAvatar } from '@mui/material';

export default function ZListItemAvatar(props) {
    return (
        <ListItemAvatar {...props}>
            {props.children}
        </ListItemAvatar>
    )
}
