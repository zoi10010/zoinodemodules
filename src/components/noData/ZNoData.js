import React from 'react'
import { withStyles } from '@mui/styles';

class NoData extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.dataContainer}>
                <span className={classes.text}>{this.props.text || "No Data Available."}</span>
            </div>

        )
    }
}

const styles = theme => ({
    container: {
        padding: theme.spacing(1)
    },
    dataContainer: {
        textAlign: 'center',
        verticalAlign: 'middle',
        margin: '0 auto',        
    },
    text: {
        fontSize: 16,
        color: 'rgb(109, 110, 112)',
        margin: '0 auto',
        textAlign: 'center',
    }
});
export default withStyles(styles)(NoData);