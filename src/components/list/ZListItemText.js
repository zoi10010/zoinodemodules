import React from 'react'
import { ListItemText } from '@mui/material';

export default function ZListItemText(props) {
    return (
        <ListItemText {...props}>
            {props.children}
        </ListItemText>
    )
}
