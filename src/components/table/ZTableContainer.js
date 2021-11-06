import React from 'react'
import { TableContainer } from '@material-ui/core';

export default function ZTable(props) {
    return (
        <TableContainer
            {...props}
        >
            {props.children}
        </TableContainer>
    )
}