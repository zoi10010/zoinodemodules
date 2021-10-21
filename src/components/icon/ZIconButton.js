import React from 'react'
import { IconButton } from '@material-ui/core';

export default function ZIconButton(props) {
    return (
        <IconButton
            color={props.color}
            disabled={props.disabled}
            disableFocusRipple={props.disableFocusRipple}
            disableRipple={props.disableRipple}
            edge={props.edge}
            size={props.size}
            onClick={props.onClick}
        >
            {props.children}
        </IconButton>
    )
}
