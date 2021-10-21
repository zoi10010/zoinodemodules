import React from 'react';
import Paper from '@material-ui/core/Paper';


export default function ZPaper(props) {
    return (
        <Paper
            className={typeof props.className!="boolean"?props.className:""}
            component={props.component}
            // elevation={1}
            square={props.square}
            variant={props.variant}
            elevation={props.elevation}
            style={props.style}
            onScroll={props.onScroll}
        >
            {props.children}
        </Paper>
    )
}
