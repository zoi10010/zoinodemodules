import React from 'react'
import { Drawer } from '@mui/material';

export default function ZDrawer(props) {
    return (
       <Drawer {...props}>
           {props.children}
       </Drawer>
    )
}