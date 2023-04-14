import React from 'react'
import { ZListSubHeader } from '@mui/material';

export default function ZListSubHeader(props) {
    return (
        <ZListSubHeader {...props}>
            {props.children}
        </ZListSubHeader>
    )
}
