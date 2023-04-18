import React from 'react'
import { TableCell } from '@mui/material';

export default function ZTableCell(props) {
  return (
      <TableCell
          {...props}
      >
          {props.children}
      </TableCell>
  )
}