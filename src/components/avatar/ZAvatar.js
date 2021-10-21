import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

export default function Avatars(props) {
    const classes = useStyles();
    return (
        <Avatar {...props}>{props.children}</Avatar>
    )
}

const useStyles = makeStyles((theme) => ({
    orange: {
        backgroundColor: theme.palette.primary.main,
    },
}));