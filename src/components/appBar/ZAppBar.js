import React from 'react'
import AppBar from '@mui/material/AppBar';

export default function ZAppBar(props) {
    return (
        <AppBar {...props}>
            {props.children}
        </AppBar>
    )
}