import React from 'react'
import { Table } from '@mui/material';


export default function ZTable(props) {
     return (
        <Table {...props}>
             {props.children} 
        </Table>
     )
}