import React from 'react'
import { CardContent } from '@mui/material';

export default function ZCardContent(props) {
    return (
        <CardContent {...props}>
            {props.children}
        </CardContent>
    )
}
