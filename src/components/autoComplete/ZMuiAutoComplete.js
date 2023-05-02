import React from 'react';
import { Autocomplete } from '@mui/material';

export default function ZMuiAutoComplete(props)
{
    <Autocomplete {...props}>
        {props.children}
    </Autocomplete>
}