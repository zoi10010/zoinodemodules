import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

export default function ZSkeleton(props) {
    return (
        <Skeleton {...props}>
            {props.children}
        </Skeleton>
    )
}
