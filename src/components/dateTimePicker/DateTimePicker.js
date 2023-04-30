import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function ZDateTimePicker(props) {
  return (
    <DateTimePicker  {...props}>
      {props.children}
    </DateTimePicker >
  );
}

export default ZDateTimePicker;