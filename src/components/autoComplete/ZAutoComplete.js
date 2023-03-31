import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox(props) {
    // const styles = styles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState("");
    const [inputValue, setinputValue] = useState("");
    const handleChange = (value) => {
        setinputValue(value)     
        setOpen(true);
           // props.onTeam(value)
   
    }

    const onSelect = (value) => {  
        props.selectvalue(value)
        setOpen(false)
    }
    const closePopup = () => {
        setOpen(false)
    }    
  

    return (
            <Autocomplete
              options={props.data}
                // classes={{
                //     popper: styles.option
                // }}
                getOptionLabel={(option) => option != undefined ? option.name : ""}
                value={props.value}
            //    loading={!open}
                loadingText={props.Loading}
                onChange={(event, values) => onSelect(values)}
                renderInput={(params) => <TextField onChange={(e) => handleChange(e.target.value)} onBlur={closePopup} {...params} label={props.label}
                placeholder={props.placeholder}
                     className={props.className} error={props.error}
                     helperText={props.error} variant ="standard"
                    />}
              //  open={open}
            />
           
    );
}