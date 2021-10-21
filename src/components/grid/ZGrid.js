import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function ZGrid(props) {
    return (
        <Grid
            {...props}
        >
            {props.children}
        </Grid>
    )
}
