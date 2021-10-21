import React from 'react'
import AppBar from '@material-ui/core/AppBar';

export default function ZAppBar(props) {
    return (
        <AppBar {...props}>
            {props.children}
        </AppBar>
    )
}
