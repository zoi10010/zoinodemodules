import React from 'react'
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
// import About from '../../asset/png/info-popup.png';
import Constants from '../../utils/constants/ConstantCss';
import ZGrid from '../grid/ZGrid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Header(props) {
    const classes = useStyles();
    return (
        <ZGrid container className={classes.gridHeader} style={props.style}>
            <Tooltip title={[props.tooltip ? props.tooltip : props.title]} classes={{ tooltip: classes.customWidth }} arrow >
                {/* <Typography noWrap variant="h6" align={props.align} className={classNames(classes.heading, props.className)}>
                    {props.title}
                    </Typography>*/}
            </Tooltip>
        </ZGrid>
    )
}
const useStyles = makeStyles({

    gridHeader: {
        flexWrap: 'nowrap',
        paddingBottom: "0.625rem",
        zIndex:1
    },
    heading: {
        lineHeight: "100%",
        paddingRight: "0.625rem",
        zIndex: 1
    },
    customWidth: {
        maxWidth: 230,
        fontSize: "0.875rem"
    },
    
    about:{
        zIndex:1 ,
        display:Constants.display.flex,
        "& > div":{
            display:Constants.display.flex,
            alignItems: Constants.flexItems.center
        }
    }
});