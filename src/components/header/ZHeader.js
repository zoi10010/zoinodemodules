import React from 'react'
import { makeStyles } from '@mui/styles';
// import About from '../../asset/png/info-popup.png';

import ZGrid from '../grid/ZGrid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Header(props) {
    const classes = useStyles();
    return (
        <ZGrid container className={classes.gridHeader} style={props.style}>
            <Tooltip title={[props.tooltip ? props.tooltip : props.title]} classes={{ tooltip: classes.customWidth }} arrow >
                <Typography align={props.align} className={classNames(classes.heading, props.className)}>
                    {props.title}
                </Typography>
            </Tooltip>
        </ZGrid>
    )
}
const useStyles = makeStyles({

    gridHeader: {
        flexWrap: 'nowrap',
        paddingBottom: 10,
        zIndex: 1
    },
    heading: {
        fontSize: 20,
        lineHeight: "100%",
        top: "413px",
        //paddingTop:20,
        // paddingLeft:20,
        // padding:5
        // padding:0,
        paddingRight: 10,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 1
    },
    customWidth: {
        maxWidth: 230,
        fontSize: 14
    },

    about: {
        zIndex: 1
    }
});