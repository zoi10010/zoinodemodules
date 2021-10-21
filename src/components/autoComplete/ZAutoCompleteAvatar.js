import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';

export default function ZAutoCompleteAvatar(props) {
    const classes = useStyles();
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
                    popper: classes.option
                }}
                getOptionLabel={(option) => option.name}
                value={props.value}
                loading={!open}
                loadingText={props.Loading}
                onChange={(event, values) => onSelect(values)}
                renderOption={(option) => (
                    <React.Fragment>
                        {!option.profileImage.includes("default.png") && option.profileImage.length > 2 ?
                            <Avatar src={option.profileImage} className={classes.imageAvatar} />
                            :
                            option.profileImage.includes("default.png") ?
                                <Avatar className={classes.avatar}>{option.name.charAt(0).toUpperCase()}</Avatar >
                                :
                                <Avatar className={classes.avatar}>{option.profileImage.toUpperCase()}</Avatar >
                        }
                        {option.name}
                    </React.Fragment>
                )}
                renderInput={(params) => <TextField onChange={(e) => handleChange(e.target.value)} onBlur={closePopup} {...params} label={props.label}
                    className={props.className} error={props.error != undefined && props.error.length > 0}
                    helperText={props.error} />}

                open={open}
            />
            {/* <span className="MuiFormHelperText-root errorText" style={{ fontSize: 12 }}>{props.error}</span> */}
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(2),
        height: theme.spacing(2),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    avatar: {
        border: "2px solid #0B5C7E",
        marginRight: 10,
        backgroundColor: "#0B5C7E"
    },
    imageAvatar: {
        border: "2px solid #0B5C7E",
        marginRight: 10
    },
    // option: {
    //     zIndex:"1199",
    // }
}));