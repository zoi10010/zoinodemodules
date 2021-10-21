import React from 'react'
import Box from '@material-ui/core/Box';

export default function ZBox(props) {
    return (
        <Box {...props}>
            {props.children}
        </Box>
    )
}
