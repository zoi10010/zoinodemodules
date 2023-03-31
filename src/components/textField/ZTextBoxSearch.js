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
    width:"100%"
  },

  input: {
    flex: 1,
    
    "& input":{
      padding: ".375rem .5rem",
      "&::-webkit-input-placeholder": {
        color:Colors.placeholder,
        fontSize: constants.fontSize.sm,
      },
    }
  },

  iconButton: {
    padding: ".375rem .5rem"
  },
  divider: {
    height: 28,
    margin: ".25rem",
  },
});

export default withStyles(styles)(ZTextBoxSearch)