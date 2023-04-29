import React from 'react'
import { TabList } from '@mui/lab';


export default function ZTabList(props) {
    return (
       <TabList {...props}>
           {props.children}
       </TabList>
    )
}
