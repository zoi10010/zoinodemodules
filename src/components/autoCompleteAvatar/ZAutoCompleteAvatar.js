import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';

function ZAutocompleteAvatar(props) {
    return (
        <Autocomplete {...props}>
            {props.children}
        </Autocomplete >
    );
}
export default ZAutocompleteAvatar;