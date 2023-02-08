import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ZTypography from '../typography/ZTypography'

export default function ContainedButtons(props) {
    const [loading, setLoading] = useState(false)
    const classes = useStyles();

    useEffect(() => {
        setLoading(props.isLoading)
    }, [props.isLoading, props.disabled])

    return (
        <div>
            <Button
                {...props}
                fullWidth={props.fullWidth}
                size={props.size}
                onClick={props.onClick}
                className={props.className}
                style={props.style}
                variant={props.variant}
                color={props.color}
                disabled={props.disabled}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
            >
                {props.children}
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                <ZTypography noWrap className={props.buttonLabel}> {props.name}</ZTypography>
            </Button>
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    buttonProgress: {
        // color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    customWidth: {
        fontSize: 14
    },
}));