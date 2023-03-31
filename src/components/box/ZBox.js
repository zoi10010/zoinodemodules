import React from 'react'
import Box from '@mui/material/Box';

export default function ZBox(props) {
    return (
        <Box {...props}>
            {props.children}
        </Box>
    )
}