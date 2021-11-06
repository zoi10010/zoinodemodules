import React from 'react'
import { TableHead } from '@material-ui/core';

export default function ZTable(props) {
    return (
        <TableHead
            {...props}
        >
            {props.children}
        </TableHead>
    )
}