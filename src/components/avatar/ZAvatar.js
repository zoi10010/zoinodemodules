import React from 'react'
import Avatar from '@mui/material/Avatar';

export default function Avatars(props) {
    return (
        <Avatar {...props}>{props.children}</Avatar>
    )
}

