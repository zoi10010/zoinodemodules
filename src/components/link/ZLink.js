import React from 'react'
import Link from '@mui/material/Link';

export default function LinkText(props) {
    
    return (
        <Link href={props.href} color={props.color} onClick={(event) => event.preventDefault()} variant="body2">
            {props.text}
        </Link>
    )
}



