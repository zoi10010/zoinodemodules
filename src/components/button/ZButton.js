import React, { useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function ZButton(props) {
    const [loading, setLoading] = useState(false)
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
                disabled={props.disabled}
                to={props.to}
                component={props.component}
            >
                <img src={props.src} />
                {loading && <CircularProgress size={24} />}
                {props.name}
            </Button>

        </div>
    );
}


export default withStyles(styles)(ZButton)