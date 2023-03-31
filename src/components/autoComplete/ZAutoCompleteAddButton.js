import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/material/Autocomplete';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, Box } from "@mui/material";

function ZAutoCompleteAddButton(props) {
    const filter = createFilterOptions();
    const [open, setOpen] = React.useState(true);
    const [error, setError] = React.useState("");
    const [text, setText] = React.useState("");


    const onChange = (e) => {
        setText(e.target.value)
    }

    const checkReg = (e) => {
        var value = e.clipboardData.getData('Text')
        for (var i = 0; i < value.length; i++) {
            var k = value.charCodeAt(i)
            if ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 45 || k == 95 || k == 40 || k == 41 || k == 64 || k == 38 || k == 46 || (k >= 47 && k <= 57)) {

            }
            else {
                e.preventDefault()
            }
        }

    }
    const alpha = (e) => {
        if (e.target.value.length < 100) {
            var k;
            document.all ? k = e.keyCode : k = e.which;
            if ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 16 || k == 35 || k == 32 || k == 45 || k == 95 || k == 40 || k == 41 || k == 64 || k == 38 || k == 46 || (k >= 47 && k <= 57)) {
                return true;
            }
            else {
                e.preventDefault()
            }
        }
        else {
            e.preventDefault()
        }
    }

    const checkDuplicate = (e) => {
        var existdata = props.data.filter(a => a.name.toLowerCase() == e.toLowerCase())
        return existdata.length > 0;
    }


    return (
        <Autocomplete
            {...props}
            options={props.data}
            classes={props.classes}
            filterOptions={(options, params) => {


                const filtered = filter(options, params);

                if (params.inputValue !== '' && props.isShowAddButton) {

                    filtered.push({
                        isButton: true,
                        name: params.inputValue,
                        value: params.inputValue,
                    });
                }
                return filtered;
            }}
            getOptionLabel={(option) => option != undefined ? option.name : ""}
            renderOption={(prop, option) => (
                <>
                    {option.isButton ?

                        <li  {...prop}>
                            <Button
                                variant="contained"
                                color="primary"
                                onMouseDown={() => {
                                    checkDuplicate(text.trim()) ? props.popupError() : props.showpopup(text.trim())
                                }}
                            >
                                Add New {props.Loading}
                            </Button>

                        </li>
                        :
                        <li {...prop}>{option.name}</li>
                    }
                </>
            )
            }
            value={props.value}
            loading={!open}
            loadingText={props.Loading ? props.Loading : "Loading..."}
            onChange={(event, values) => props.selectvalue(values)}
            renderInput={(params) => <TextField inputProps={{ maxLength: 3 }}
                variant="standard" onKeyPress={alpha} onBlur={props.onBlur} onChange={onChange} {...params} label={props.label}
                className={props.className} onPaste={checkReg} error={props.error != undefined && props.error.length > 0 ? true : false} helperText={props.error} />}


            onClose={() => setText("")}
        />
    );
}



export default ZAutoCompleteAddButton;
