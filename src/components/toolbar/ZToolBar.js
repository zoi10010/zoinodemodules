import React from 'react'
import { Toolbar } from '@material-ui/core';


function ZToolbar(props) {
    return (
        <div>
            <Toolbar {...props}>
                {props.children}
            </Toolbar>
        </div>
    );
}

export default ZToolbar;