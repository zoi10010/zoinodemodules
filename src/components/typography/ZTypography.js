import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default function ZTypography(props) {
    return (
        <Typography {...props}>
            {props.children}
        </Typography>
    )
}
