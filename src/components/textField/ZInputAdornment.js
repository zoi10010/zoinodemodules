import React from 'react'
import { InputAdornment } from '@mui/material';

export default function ZInputAdornment(props) {
    return (
        <InputAdornment
            className={props.className}
            component={props.component}
            disablePointerEvents={props.disablePointerEvents}
            disableTypography={props.disableTypography}
            position={props.position}
            variant={props.variant}
        >
            {props.children}
        </InputAdornment>
    )
}
