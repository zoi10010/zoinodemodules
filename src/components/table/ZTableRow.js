import React from 'react'
import { TableRow } from '@material-ui/core';

export default function ZTable(props) {
    return (
        <TableRow
            {...props}
        >
            {props.children}
        </TableRow>
    )
}