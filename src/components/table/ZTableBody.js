import React from 'react'
import { TableBody } from '@mui/material';

export default function ZTableBody(props) {
    return (
        <TableBody
            {...props}
        >
            {props.children}
        </TableBody>
    )
}