import React, { useEffect, useState } from 'react';
import { withStyles , makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

function ZButton(props) {
    const [loading, setLoading] = useState(false)
    const { classes } = props
    useEffect(() => {
        setLoading(props.isLoading)
    }, [props.isLoading, props.disabled])
    return (
        <div className={classes.root}>

            <Button
                {...props}
                fullWidth={props.fullWidth}
                size={props.size}
                onClick={props.onClick}
                className={props.className}
                style={props.style}
                variant={props.variant}
                disabled={props.disabled}
                to={props.to}
                component={props.component}
            >
                <img src={props.src} />
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                {props.name}
            </Button>

        </div>
    );
}
const styles = makeStyles((theme) => ({
    buttonProgress: {
        position: constants.position.absolute,
        top: '50%',
        left: '50%',
        marginTop: "-.75rem",
        marginLeft: "-.75rem",
    },
    customWidth: {
        fontSize: constants.fontSize.sm,
    },

    root: {
        display: constants.display.flex,
        '& button': {
            borderRadius: constants.borderRadius.xs, 
            fontSize: constants.fontSize.md,
            fontWeight: constants.fontWeight.sm,
            lineHeight: constants.lineHeight.md,
            boxShadow:constants.boxShadow.none,
            textTransform:constants.textTransform.capital,
            "&:hover":{
                boxShadow:constants.boxShadow.none,
            },

            '& + span': {
                right: constants.inset.md,
                position: constants.position.absolute
            }
        }
    },

}));

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: Colors.primary,
//             contrastText: Colors.white,
//         },
//         secondary: {
//             main: Colors.secondary,
//             contrastText: Colors.white,
//         },
//     },

//     overrides: {
//         MuiButton: {
//           root: {
//             borderRadius: 0,
//             fontWeight: constants.fontWeight.bold,
//           },
//           containedPrimary: {
//             color: Colors.white,
//             backgroundColor: Colors.red,
//             '&:hover': {
//               backgroundColor: Colors.darkRed,
//             },
//           },
//           text: {
//             textTransform: constants.textTransform.lower
//           },
//         },
//       },
// });
export default withStyles(styles)(ZButton)