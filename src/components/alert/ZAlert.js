import React from 'react'
import Alert from '@material-ui/lab/Alert';

export default function ZAlert(props) {
    return (
        <Alert {...props}>
            {props.children}
        </Alert>
    )
}
