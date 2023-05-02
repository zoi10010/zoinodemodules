import React from 'react';
import { DropZone } from 'material-ui-dropzone';

export default function ZMuiDropZone(props)
{
    return(
        <DropZone>{props.children}</DropZone>
    )
}