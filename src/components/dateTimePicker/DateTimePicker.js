import React, { Fragment, useState } from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function ZDateTimePicker(props) {
  return (
    <DateTimePicker  {...props}>
      {props.children}
    </DateTimePicker >
  );
}

export default ZDateTimePicker;