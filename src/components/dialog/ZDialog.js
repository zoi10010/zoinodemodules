import React from 'react'
import Dialog from '@mui/material/Dialog';
import { makeStyles  ,Theme  } from '@mui/styles';
import Colors from '../../utils/constants/Colors';
import constants from '../../utils/constants/ConstantCss';

export default function ZDialog(props) {
    return (
        <Dialog {...props} className={classes.dialog}>
            {props.children}
        </Dialog>
    )
}

const useStyles = makeStyles((theme) => ({
    dialog:{
        "& > div.MuiModal-backdrop":{
          inset: 0,
          backgroundColor: Colors.fadedWhite,   
        },
  
        "& > div.MuiDialog-container .MuiPaper-root":{
          boxShadow:constants.boxShadow.modalShadow,
          border:`1px solid ${Colors.lightGray}`,        
          borderRadius: constants.borderRadius.md,     
          "& > h2":{
            fontWeight: constants.fontWeight.lg,
            fontSize: constants.fontSize.lg,
            padding:"1rem",
            borderBottom:`1px solid ${Colors.lightGray}`,  
              "& + div":{
                padding:"1rem",
                paddingTop: "0.625rem",
                "& > div.MuiFormControl-root":{
                  width: "100%"
                },

                "& + div.MuiDialogActions-root":{
                  padding:"1rem",
                  gap: ".5rem"
                }
              },
            } 
          }
        }
}));
