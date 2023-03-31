import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { withStyles } from '@mui/styles';

function ZTextBox(props) {
    const { classes } = props
    

    return (
        <FormControl className={classes.formControl}>
            <TextField
                InputProps className={classes.inputIcon}
                {...props}
                
            />
        </FormControl>
    )
}

const useStyles = makeStyles(({  
    formControl:{
        width:"100%",
        "& label":{
            color:Colors.placeholder,
            fontSize:constants.fontSize.sm,
            "& + div.MuiInputBase-adornedEnd":{
                paddingRight: ".65rem"
            },

            "& + div.MuiInputBase-root":{
                "&:hover":{
                    "& fieldset.MuiOutlinedInput-notchedOutline":{
                        borderColor:Colors.highlightedBorder
                    }
                }              
            },   
            
            "& + div.MuiInputBase-root.Mui-focused":{
                "& fieldset.MuiOutlinedInput-notchedOutline":{
                    border: `${constants.border.solid} ${Colors.highlightedBorder}`,                    
                }       
            },  
        },
        
       

        "& fieldset.MuiOutlinedInput-notchedOutline":{
            borderColor:Colors.border
    },

        "& label.MuiInputLabel-outlined[data-shrink='true']":{
            transform: "translate(.875rem, -.5625rem) scale(1)",
            fontSize:constants.fontSize.xs,
            "& + .MuiInputBase-formControl":{
                "& input.MuiOutlinedInput-input":{
                    padding:".375rem .875rem"
                }
            }
        },
        
       "& label.MuiInputLabel-outlined[data-shrink='false']":{
            lineHeight: "0.85em",
            transform: "translate(.75rem, .75rem) scale(1)",
            fontSize:constants.fontSize.sm,
            "& + .MuiInputBase-formControl":{
                "& input.MuiOutlinedInput-input":{
                    padding:".375rem .875rem"
                }
            }
       },

       "& label.MuiInputLabel-standard":{
        "& + .MuiInputBase-root:before":{
            borderBottom: `${constants.border.solid} ${Colors.border}`,
        },
        "& + .MuiInputBase-root:after":{
            borderBottom: `${constants.border.solid} ${Colors.highlightedBorder}`,
        }
       },

       "& p.MuiFormHelperText-root":{
        color:Colors.red
       }

    },

    inputIcon:{
        "& div.MuiInputAdornment-root > span":{
            display:constants.display.flex,
            alignItems: constants.flexItems.center,
        }
      }
  }));

export default withStyles(styles)(ZTextBox);
