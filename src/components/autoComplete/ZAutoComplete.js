import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox(props) {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState("");
    const [inputValue, setinputValue] = useState("");
    const handleChange = (value) => {
        setinputValue(value)
        if (value.length > 2) {
            setOpen(true);
            props.onTeam(value)
        } else {
            setOpen(false)
        }
    }

    const onSelect = (value) => {
        props.selectvalue(value)
        setOpen(false)
    }
    const closePopup = () => {
        setOpen(false)
    }    
  

    return (
        <>
            <Autocomplete
                options={open ? props.data : []}
                classes={{
                    popper: styles.option
                }}
                getOptionLabel={(option) => option != undefined ? option.name : ""}
                value={props.value}
                loading={!open}
                loadingText={props.Loading}
                onChange={(event, values) => onSelect(values)}
                renderInput={(params) => <TextField onChange={(e) => handleChange(e.target.value)} onBlur={closePopup} {...params} label={props.label}
                    className={props.className} error={props.error.length > 0}
                    helperText={props.error} />}
                open={open}
            />
            {/* <span className="MuiFormHelperText-root errorText" style={{ fontSize: 12 }}>{props.error}</span> */}
        </>
    );
}










