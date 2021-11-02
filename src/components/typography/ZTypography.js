import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

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
