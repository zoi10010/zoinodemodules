

import React from 'react'
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function ZTypography(props) {
    return (
        <Fragment>
            {props.isLoading ?
                <Skeleton height={10} variant="rect"></Skeleton>
                :
                <Typography {...props}>
                    {props.children}
                </Typography>
            }
        </Fragment>
    )
}