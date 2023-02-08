import React from 'react'
import Dialog from '../../components/dialog/ZDialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import ZHeader from '../../components/header/ZHeader';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ZButton from '../../components/button/ZButton';
import { withStyles } from '@mui/styles';


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} >
            <ZHeader title={props.head}></ZHeader>
            <IconButton
                style={{ position: 'absolute', right: 10, top: 5, color: "#555" }}
                onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


export default function ZCommonDialog(props) {
    return (
        <div>
            <Dialog fullWidth={true} open={props.open} {...props}>
                {props.head &&
                    <DialogTitle onClose={() => props.close()} head={props.head}>
                    </DialogTitle>
                }
                <DialogContent >
                    {props.children}
                </DialogContent>
                <MuiDialogActions >
                    {props.actionButton.map(i => {
                        return (
                            <ZButton
                                variant={i.variant}
                                color={i.color}
                                onClick={() => i.action()}
                                name={i.name}
                            ></ZButton>
                        )
                    })}

                </MuiDialogActions>
            </Dialog>
        </div>
    )
}

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },

});

