import React from 'react'
import { Chip } from '@mui/material';

export default function ZChip(props) {
    return (
        <Chip {...props}>
            {props.Chip}
        </Chip>
    )
}
