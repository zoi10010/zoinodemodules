import React from 'react'
import { ListItemButton } from '@mui/material';

export default function ZListItemButton(props) {
    return (
        <ListItemButton {...props}>
            {props.children}
        </ListItemButton>
    )
}
