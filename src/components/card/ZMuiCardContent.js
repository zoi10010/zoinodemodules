import React from 'react';
import { CardContent } from '@mui/material';

export default function ZMuiCardContent(props)
{
    <CardContent {...props}>
        {props.children}
    </CardContent>
}