import React from 'react'
import { Table } from '@material-ui/core';


export default function ZmTable(props) {
     return (
        <Table {...props}>
             {props.children} 
        </Table>
     )

}