import React from 'react'
import { TableContainer } from '@mui/material';

export default function ZTableContainer(props) {
    return (
        <TableContainer
            {...props}
        >
            {props.children}
        </TableContainer>
    )
}