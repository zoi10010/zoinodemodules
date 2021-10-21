import React from 'react'
import Collapse from '@material-ui/core/Collapse';


export default function ZCollapse(props) {
    return (
        <Collapse {...props}>
            {props.children}
        </Collapse>
    )
}
