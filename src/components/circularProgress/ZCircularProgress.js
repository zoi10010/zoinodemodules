import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function ZCircularProgress(props) {
    return (
        <CircularProgress {...props}>
            {props.children}
        </CircularProgress>
    )
}
