import React from 'react'
import TableFooter from '@material-ui/core/TableFooter';

export default function ZTableFooter(props) {
    return (
       <TableFooter {...props}>
           {props.children}
       </TableFooter>
    )
}
