import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';
function ZDateTimePicker(props) {

  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        {...props}
        label={props.label}
        className={classes.formControl}
        value={props.value}
        onChange={props.handleChange}
        maxDate={props.maxDate}
        minDate={props.minDate}
        minDateMessage={props.minDateMessage}
        helperText={props.error}
        error={props.error.length > 0}
      />
    </MuiPickersUtilsProvider>
  );
}
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginTop: 6
  },
}));
export default ZDateTimePicker;