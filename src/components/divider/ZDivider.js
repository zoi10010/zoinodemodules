import React from 'react'
import { Divider } from '@material-ui/core';


export default function ZDivider(props) {
    return (
       <Divider {...props}>
           {props.children}
       </Divider>
    )
}
