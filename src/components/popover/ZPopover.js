import React from 'react'
import Popover from '@mui/material/Popover';

export default function ZPopover(props) {
    return (
        <Popover
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            anchorPosition={props.anchorPosition}
            anchorReference={props.anchorReference}
            container={props.container}
            elevation={props.elevation}
            getContentAnchorEl={props.getContentAnchorEl}
            marginThreshold={props.marginThreshold}
            onClose={props.onClose}
            onEnter={props.onEnter}
            onEntered={props.onEntered}
            onEntering={props.onEntering}
            onExit={props.onExit}
            open={props.open}
        >
            {props.children}
        </Popover>
    )
}
