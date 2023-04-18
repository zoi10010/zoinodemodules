import React from 'react'
import Divider from '@mui/material/Divider';


export default function ZDivider(props) {
    return (
       <Divider {...props}>
           {props.children}
       </Divider>
    )
}
