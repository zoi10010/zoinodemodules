import React from 'react'
import { TableHead } from '@mui/material';

export default function ZTableHead(props) {
    return (
        <TableHead
            {...props}
        >
            {props.children}
        </TableHead>
    )
}