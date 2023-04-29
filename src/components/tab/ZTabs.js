import React from 'react'
import { Tabs } from '@mui/material';


export default function ZTabs(props) {
    return (
       <ZTabs {...props}>
           {props.children}
       </ZTabs>
    )
}
