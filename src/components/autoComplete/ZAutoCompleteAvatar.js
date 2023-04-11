import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import { withStyles } from '@mui/styles';

function ZAutoCompleteAvatar(props) {
    const { classes } = props
    const [open, setOpen] = React.useState(false);

    const handleChange = (value) => {
        props.onTeam(value)
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
    );
}

const styles = theme => ({
    root: {
        display: 'flex',

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
});

export default withStyles(styles)(ZAutoCompleteAvatar);