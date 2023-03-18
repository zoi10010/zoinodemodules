import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import ZCloseIcon from '@mui/icons-material/Close';
import { withStyles } from '@mui/styles';

import ZTypography from '../typography/ZTypography'

function ZDropzone(props) {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            props.onDrop(file)
        })
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    const { classes } = props;
    return (
        <div>
            <div className={classes.root} >
                {props.fileSrc != "" && props.fileSrc != null ? <ZCloseIcon style={{ fontSize: 18 }} onClick={props.remove} /> : null}
                <div {...getRootProps()}>
                    <input {...getInputProps()} multiple={false}
                        accept={props.accept}
                    />
                    {props.fileSrc == "" || props.fileSrc == null || props.fileSrc == undefined ?
                        <ZTypography className={classes.text}>{props.placeHolder ? props.placeHolder : "Upload Image"}</ZTypography>
                        :
                        <img src={props.fileSrc} className={classes.image} />
                    }
                </div>
            </div>
        </div>
    )
}


const styles = theme => ({
    root: {
        border: "1px dotted black",
        textAlign: "center",
        width: "100%",
        paddingBottom: 6,
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
        cursor: "pointer"
        // margin:"0% 30%"
    },
    image: {
        width: 108
        , height: 100
        , cursor: "pointer"
    },
    text: {
        cursor: "pointer",
        minHeight: 91,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
            textAlign: "center"
        },
    }
});

export default withStyles(styles)(ZDropzone);

