import React from 'react'
import { Divider } from '@mui/material';


export default function ZDivider(props) {
    return (
       <Divider {...props}>
           {props.children}
       </Divider>
    )
}
