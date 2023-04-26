import React, { useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function ZButton(props) {
    const [loading, setLoading] = useState(false)
    const { classes } = props
    useEffect(() => {
        setLoading(props.isLoading)
    }, [props.isLoading, props.disabled])
    return (
        <div>

            <Button
                {...props}
                fullWidth={props.fullWidth}
                size={props.size}
                onClick={props.onClick}
                className={props.className}
                style={props.style}
                variant={props.variant}
                disabled={props.disabled}
                to={props.to}
                component={props.component}
            >
                <img src={props.src} />
                {loading && <CircularProgress size={24} />}
                {props.name}
            </Button>

        </div>
    );
}

// const styles = theme => ({
//     root: {
//         display: 'flex',
//         '& > *': {
//         },
//         '& button': {
//             borderRadius: 4,
//             '& p': {
//                 fontSize: 13,
//                 fontFamily: "GT Walsheim Pro",
//                 lineHeight: 1.5,

//                 '& + span': {
//                     right: '1rem',
//                     position: 'absolute'
//                 }
//             },
//         }
//     },
//     buttonProgress: {

//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         marginTop: -12,
//         marginLeft: -12,
//     },
//     customWidth: {
//         fontSize: 14
//     },
// });


export default ZButton