import React from 'react'
import { Tab } from '@mui/material';


export default function ZTab(props) {
    return (
       <Tab {...props}>
           {props.children}
       </Tab>
    )
}
