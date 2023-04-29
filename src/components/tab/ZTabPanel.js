import React from 'react'
import { TabPanel } from '@mui/base';

export default function ZTabPanel(props) {
    return (
       <TabPanel {...props}>
           {props.children}
       </TabPanel>
    )
}
