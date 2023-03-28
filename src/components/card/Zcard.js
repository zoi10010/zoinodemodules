import React from 'react'
import ZTypography from '../typography/ZTypography';
import ZCardContent from './ZCardContent';
import { makeStyles } from '@mui/styles';
import ZPaper from '../paper/ZPaper';
import ZGrid from '../grid/ZGrid';
import { Hidden } from '@mui/material';
import Constants from '../../utils/constants/ConstantCss';
import Colors from '../../utils/constants/Colors';
// const BaseUrl =window.globalConfig.baseUrl


export default function ZCard(props) {
  const classes = useStyles();

 return (
 
    <ZPaper {...props} className={`${classes.cardContainer} ${classes.iconBackground}`} elevation={0} >
      <ZCardContent className={`${classes.cardContent} ${props.selectedid == props.id ? 
        classes.clickStyle  : classes.nonClickStyle }`} >
          <ZGrid container item xs={12} sm={5} md={3}>
          <Hidden smDown>
            <ZGrid item >
              <div className={classes.clockImage} style={{ background: props.background ? props.background : Colors.white }}>
                <img style={{ color: props.color ? props.color : "#63D9CC", fontSize: "32px" }} width={'100%'} height={30} src={props.icon} />
              </div>
            </ZGrid>
          </Hidden>
          <ZGrid item xs={10} sm={12} md={9} lg={10} className={classes.summaryContent}>
            <ZTypography variant="h6" className={classes.timeHead}>
              {props.name}
            </ZTypography>
            <ZTypography className={classes.timeText} variant="body2">
              {props.description}
            </ZTypography>
        </ZGrid>
        </ZGrid>
      </ZCardContent>
    </ZPaper>
  )
}



const useStyles = makeStyles((theme) => ({ 
  cardContent: {
    padding:"0 !important",
    "& > div:first-child":{
      boxShadow:Constants.boxShadow.cardShadow,
      padding:"0.625rem",
      borderRadius: "0.625rem",
      flexWrap: Constants.flexWrap.nowrap,
      alignItems: Constants.align.center,
      // "& > div:first-child":{
      //   display:Constants.display.flex,
      //   alignItems: Constants.flexItems.center
      // }
    }
  },

  summaryContent:{
      paddingLeft: "0.625rem"
  },

  clockImage: {
    background: Colors.whiteSmoke,
    borderRadius: "0.3125rem",
    padding: "0.3125rem",
    margin:'0 0.15625rem',
    display:Constants.display.flex,
    alignItems: Constants.flexItems.center,
  },

  timeText: {
    color: Colors.fadedBlack,
    textAlign: Constants.align.left,
    borderBottom: `1px solid ${Colors.white}`,
  },

  clickStyle:{
    // paddingBottom:"17 !important",
    // borderBottomColor:theme.palette.primary.light
  },

  nonClickStyle:{
    borderBottom: `1px solid ${Colors.white}`,
  },

  cardContainer:{
      padding: 0,
  },
}))


