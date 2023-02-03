import React from 'react'
import { Badge } from '@mui/material';

export default function ZBadge(props) {
    return (
        <Badge {...props}>
            {props.children}
        </Badge>
    )
}
