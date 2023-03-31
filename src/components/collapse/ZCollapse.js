import React from 'react'
import Collapse from '@mui/material/Collapse';


export default function ZCollapse(props) {
    return (
        <Collapse {...props}>
            {props.children}
        </Collapse>
    )
}
