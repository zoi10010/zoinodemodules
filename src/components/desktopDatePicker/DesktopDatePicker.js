import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ZDatepicker(props) {
    return (
        <DatePicker>
            {...props}
            {props.children}
        </DatePicker >

    );
}

export default ZDatepicker;