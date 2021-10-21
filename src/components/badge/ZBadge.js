import React from 'react'
import { Badge } from '@material-ui/core';

export default function ZBadge(props) {
    return (
        <Badge {...props}>
            {props.children}
        </Badge>
    )
}
