import React from 'react'
import { List } from '@mui/material';

export default function ZList(props) {
    return (
        <List {...props}>
            {props.children}
        </List>
    )
}
