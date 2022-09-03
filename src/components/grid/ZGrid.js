import React from 'react'
import Grid from '@mui/material/Grid';

export default function ZGrid(props) {
    return (
        <Grid
            {...props}
        >
            {props.children}
        </Grid>
    )
}
