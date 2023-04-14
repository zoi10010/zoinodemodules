import React from 'react'
import { ListItem } from '@mui/material';

export default function ZListItem(props) {
    return (
        <ListItem {...props}>
            {props.children}
        </ListItem>
    )
}
