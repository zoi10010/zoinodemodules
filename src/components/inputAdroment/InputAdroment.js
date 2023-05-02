import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import ZInputAdornment from '@material-ui/core/InputAdornment';

function InputAdornment(props) {
    return (
        <Input
            {...props}
            endAdornment={
                <ZInputAdornment position="end">
                    {props.children}
                </ZInputAdornment>
            }
        />
    )
}

export default InputAdornment;