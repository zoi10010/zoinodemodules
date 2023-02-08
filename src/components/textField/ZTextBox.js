import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Skeleton from '@mui/material/Skeleton';

export default function TextBox(props) {
    
    return (
        <FormControl >
            {props.isLoading ?
                <Skeleton height={20} variant="rect"></Skeleton>
                :
                <TextField
                    {...props}
                />
            }
        </FormControl>
    )
}



