import React from 'react'
import { TableRow } from '@mui/material';

export default function ZTableRow(props) {
    return (
        <TableRow
            {...props}
        >
            {props.children}
        </TableRow>
    )
}