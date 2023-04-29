import React from 'react'
import { Tooltip } from '@material-ui/core';

function ZTooltip(props) {
    return (
        <Tooltip  {...props}>
            {props.children}
        </Tooltip >
    );
}

export default ZTooltip;