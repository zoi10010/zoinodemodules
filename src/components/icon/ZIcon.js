import React from 'react'
import Icon from '@mui/material/Icon';

export default function ZIcon(props) {
    return (
        <Icon {...props}>
            {props.children}
        </Icon>
    )
}
