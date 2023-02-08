import React from 'react'
import Skeleton from '@mui/material/Skeleton';

export default function ZSkeleton(props) {
    return (
        <Skeleton {...props}>
            {props.children}
        </Skeleton>
    )
}
