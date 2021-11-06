import React from 'react'
import { TableCell } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ZTypography from '../typography/ZTypography';

export default function ZTable(props) {
  const classes = useStyles();
    return (        
      <TableCell {...props}> 
        {props.children!="-"?
        <Tooltip title={props.tooltip==undefined?[props.children]:props.tooltip} classes={{ tooltip:classes.customWidth }} arrow placement="bottom-start"> 
           <span>
                {props.children}
              </span>
        </Tooltip>
        :
        <span>
            {props.children}
        </span>
        }
      </TableCell>
    )
}

const useStyles = makeStyles((theme) => ({
    customWidth: {
      margin: "5px -20px",
      position: "inherit",
      fontSize: 14,
      // paddingRight: 7,
      // clear: "both",
      display: "inline-block",
      width: "max-content",
      color:"#fff"
    },

    tableContainer:{
    //   display: "inline-block",
    // width: "100%",
    // textOverflow:"ellipsis",
    // whiteSpace:"nowrap",
    // overflow:"hidden"
     // display: "initial",
      // tableLayout: "fixed"
    }
  }));