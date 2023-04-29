import React from 'react';
import {Card} from '@mui/material';

export default function ZMuiCard(props)
{
    return(
        <Card {...props}>
            {props.children}
        </Card>
    )
}
