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
    display: 'flex',
    alignItems: 'center',
    background: "#F4F6FC !important",
    borderRadius: 8
  },

  input: {
    // marginLeft: theme.spacing(1),
    flex: 1,
    "& ::-webkit-input-placeholder": {
      color: "#B1B1B1",
      fontSize: 14,
    }
  },

  iconButton: {
    padding: 10,
    cursor: 'context-menu'
  },
  divider: {
    height: 28,
    margin: 4,
  },

});

export default withStyles(styles)(ZTextBoxSearch)