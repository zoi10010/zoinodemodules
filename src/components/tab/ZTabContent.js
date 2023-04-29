import React from 'react'
import { TabContent } from '@mui/lab';

export default function ZTabContent(props) {
    return (
       <TabContent {...props}>
           {props.children}
       </TabContent>
    )
}
