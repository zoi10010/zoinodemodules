import React from 'react'
import { Tooltip } from '@material-ui/core';

function ZTooltip (props) {
    return (
        <div>
            <Tooltip  {...props}>
                {props.children}
            </Tooltip >
        </div>
    );
}

export default ZTooltip ;