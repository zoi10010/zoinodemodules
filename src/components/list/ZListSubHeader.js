import React from 'react'
import { ListSubheader } from '@mui/material';

export default function ZListSubHeader(props) {
    return (
        <ListSubheader {...props}>
            {props.children}
        </ListSubheader>
    )
}
