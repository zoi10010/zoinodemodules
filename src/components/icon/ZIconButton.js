import React from 'react'
import { IconButton } from '@mui/material';

export default function ZIconButton(props) {
    return (
        <IconButton
            {...props}
        >
            {props.children}
        </IconButton>
    )
}
