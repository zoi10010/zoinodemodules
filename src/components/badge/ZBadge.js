import React from 'react'
import { Badge } from '@mui/material/core';

export default function ZBadge(props) {
    return (
        <Badge {...props}>
            {props.children}
        </Badge>
    )
}
