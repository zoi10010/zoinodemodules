import React from 'react'
import { TableBody } from '@material-ui/core';

export default function ZTable(props) {
    return (
        <TableBody
            {...props}
        >
            {props.children}
        </TableBody>
    )
}