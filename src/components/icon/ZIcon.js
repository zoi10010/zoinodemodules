import React from 'react'
import Icon from '@material-ui/core/Icon';

export default function ZIcon(props) {
    return (
        <Icon {...props}>
            {props.children}
        </Icon>
    )
}
