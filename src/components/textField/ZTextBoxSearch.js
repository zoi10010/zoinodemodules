import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    background: "#eee",
    borderRadius: 8
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    "& ::-webkit-input-placeholder": {
      color: "#B1B1B1",
      fontSize: 14,
      [theme.breakpoints.only('xs')]: {
        fontSize: 12,
      },
    }
  },

  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  cursor: {
    cursor: 'context-menu'
  }
}));

export default function ZTextBoxSearch(props) {
  const classes = useStyles();

  return (
    <Paper component="form" elevation={0} className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="search" className={classes.cursor}>
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
