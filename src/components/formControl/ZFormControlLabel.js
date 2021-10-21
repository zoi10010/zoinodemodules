import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ZFormControlLabel(props) {
    return (
        <FormControlLabel
            checked={props.checked}
            control={props.control}
            disabled={props.disabled}
            label={props.label}
            labelPlacement={props.labelPlacement}
            onChange={props.onChange}
            value={props.value}
            className={props.className}
        />
    )
}
