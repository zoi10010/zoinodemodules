import React from 'react'
import { Chip } from '@material-ui/core';

export default function ZChip(props) {
    return (
        <Chip {...props}>
            {props.Chip}
        </Chip>
    )
}
