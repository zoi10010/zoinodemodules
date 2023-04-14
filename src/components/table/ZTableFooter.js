import React from 'react'
import {TableFooter} from '@mui/material';

export default function ZTableFooter(props) {
    return (
       <TableFooter {...props}>
           {props.children}
       </TableFooter>
    )
}
