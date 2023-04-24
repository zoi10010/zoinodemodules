import React from 'react';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material//Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function ZTextBoxSearch(props) {
  const { classes } = props

  return (
    <Paper component="form" elevation={0} className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="search" >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
        color="secondary"
        value={props.value}
      />
    </Paper>
  );
}

const styles = theme => ({
  root: {
    display:constants.display.inlineFlex,
    border: `${constants.border.solid} ${Colors.border}`,
    width:"100%",
    "&:hover":{
      border: `${constants.border.solid} ${Colors.highlightedBorder}`,
    },
    "& div.MuiInputBase-root.Mui-focused":{
      border: `${constants.border.solid} ${Colors.highlightedBorder}`,
    },

    "& div.MuiInputBase-root":{
      paddingLeft:40,
      minWidth:"100%",
      fontSize: constants.fontSize.sm,
      "& input":{
        padding: "0.53125rem 0.875rem"
      }
    },

    "& button.MuiButtonBase-root":{
      position:"absolute"
    }
  },
});

export default withStyles(styles)(ZTextBoxSearch)