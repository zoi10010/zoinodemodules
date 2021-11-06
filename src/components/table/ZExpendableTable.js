import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ZNoData from '../noData/ZNoData';
import ZComponentLoader from '../loader/ZComponentLoader';
import ZmTable from './ZmTable';
import ZTableBody from './ZTableBody';
import ZTableCell from './ZTableCell';
import ZTableContainer from './ZTableContainer';
import ZTableHead from './ZTableHead';
import ZTableRow from './ZTableRow';
import Tooltip from '@material-ui/core/Tooltip';
import { TableCell } from '@material-ui/core';
//import Tooltip from '@material-ui/core/Tooltip';
import downloadicon from '../../asset/images/downloadicon.svg'
import pendingicon from '../../asset/images/pendingicon.svg'
import erroricon from '../../asset/images/erroricon.svg'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ZTableFooter from './ZTableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { IconButton } from '@material-ui/core';
import ZTypography from '../typography/ZTypography'
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import constants from '../../utils/constants/ConstantCSS';
import ZPaper from '../paper/ZPaper';
import ZSkeleton from '../../components/SkeletonLoader/ZSkeleton';


function ZCell(props) {
    return (
        <TableCell {...props}>
            {props.children}
        </TableCell>
    )
}

class ApplicationTableRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRow: null,
            open: false,
            page: 0,
            rowsPerPage: 10,
            data: {
                head: [],
                body: []
            },
        }
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        })
    };
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                data: this.props.data
            })
        }
    }
    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    };

    rowClick = (items, i, index) => {

        if (items[this.props.selectedIndex].id != this.state.selectedRow) {
            this.setState({
                selectedRow: items[this.props.selectedIndex].id
            })
        } else {
            this.setState({
                selectedRow: ""
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { data } = this.state;
        return (
            <ZPaper elevation={0}>
                <ZTableContainer className={this.props.isPagination ? classes.container : classes.dashboardContainer}>

                    <ZmTable className={classes.table} stickyHeader aria-label="sticky table">
                        <ZTableHead style={{ background: '#ffff' }}>
                            <ZTableRow>
                                {data.head != undefined && data.head.map((value, index) => {
                                    if (index == 0) {
                                        return (
                                            <ZTableCell key={index} colSpan={2} className={classes.tableHead} align={value.align}>
                                                {value.label}
                                            </ZTableCell>
                                        )
                                    }
                                    return (
                                        <ZTableCell key={index} className={classes.tableHead} align={value.align}>
                                            {value.label}
                                        </ZTableCell>
                                    )
                                })
                                }
                            </ZTableRow>
                        </ZTableHead>
                        {this.props.isLoading == false ? data.body != undefined && data.body.length > 0 ?
                            <ZTableBody>
                                {(this.state.rowsPerPage > 0 && this.props.isPagination
                                    ? data.body.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                    : data.body
                                ).map((items, i) => {
                                    return (
                                        <>
                                            <ZTableRow hover key={i} onClick={() => this.rowClick(items, items[this.props.selectedIndex], i)} className={classes.expendableRow}>
                                                {data.head != undefined && data.head.map((value, index) => {
                                                    if (index == 0) {
                                                        return (
                                                            <TableCell key={index} className={classes.row} align={value.align} colSpan={2}>
                                                                {items[this.props.selectedIndex].child.length > 0 ? items[this.props.selectedIndex].id == this.state.selectedRow ?
                                                                    <ArrowDropDown className={classes.arrowContainer} /> :
                                                                    <ArrowRight className={classes.arrowContainer} /> : ""}
                                                                <Tooltip title={items[index]} arrow placement="bottom-start" classes={{ tooltip: classes.customWidth }}>
                                                                    <span>{items[index] || "-"}</span>
                                                                </Tooltip>
                                                            </TableCell>
                                                        )
                                                    }
                                                    return (
                                                        <ZTableCell className={classes.row} key={index} align={value.align}>
                                                            {items[index]}
                                                        </ZTableCell>
                                                    )
                                                })
                                                }
                                            </ZTableRow>

                                            {items[this.props.selectedIndex].id == this.state.selectedRow &&
                                                items[this.props.selectedIndex].child != undefined &&
                                                items[this.props.selectedIndex].child.length > 0 &&
                                                items[this.props.selectedIndex].child.map((ChildItems, i) => {
                                                    return (
                                                        <ZTableRow hover key={i} >
                                                            {data.head != undefined && data.head.map((value, index) => {
                                                                if (index == 0) {
                                                                    return (
                                                                        <TableCell className={classes.row} key={index} colSpan={2}>
                                                                            {/* <span noWrap style={{marginLeft:20}}>{ChildItems[index]}</span> */}
                                                                            <Tooltip title={ChildItems[index]} arrow placement="bottom-start" classes={{ tooltip: classes.customWidth }}>
                                                                                <span style={{ marginLeft: "1.25rem" }}>
                                                                                    {ChildItems[index] || "-"}
                                                                                </span>
                                                                            </Tooltip>
                                                                        </TableCell>
                                                                    )
                                                                }
                                                                return (
                                                                    <ZTableCell className={classes.row} key={index} align={value.align}>
                                                                        {ChildItems[index] || "-"}
                                                                    </ZTableCell>
                                                                )
                                                            })
                                                            }
                                                        </ZTableRow>
                                                    )
                                                }
                                                )
                                            }
                                        </>
                                    )
                                }
                                )}
                            </ZTableBody>
                            :
                            <ZTableBody>
                                <ZTableRow>
                                    <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none', lineHeight: 20 }}>
                                        <ZNoData height={20} />
                                    </TableCell>
                                </ZTableRow>
                            </ZTableBody>
                            :
                            <ZTableBody>
                                <ZTableRow>
                                    <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                        <ZSkeleton height={"100%"} component={"h1"} animation="pulse"></ZSkeleton>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>

                                    </TableCell>
                                </ZTableRow>
                            </ZTableBody>
                        }

                    </ZmTable>
                </ZTableContainer>
                {data.body != undefined && data.body.length > 0 && this.props.isPagination &&
                    <ZTableFooter >
                        <ZTableRow>
                            <TablePagination
                                rowsPerPageOptions={[10, 20, 30]}
                                colSpan={3}
                                count={data.body.length}
                                rowsPerPage={this.state.rowsPerPage}
                                page={this.state.page}
                                onChangePage={(event, value) => this.handleChangePage(event, value)}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                colSpan={data.head != undefined ? 6 : 2}
                            />
                        </ZTableRow>
                    </ZTableFooter>

                }
            </ZPaper>
        );
    }
}

const styles = (theme) => ({
    container: {
        minHeight: "100px",
        maxHeight: 400,
        height: 390,
        width: '100%',
        overflowX: 'hidden'
    },

    dashboardContainer: {
        minHeight: "100px",
        maxHeight: "405px",
        height: 405,
        width: '100%',
        overflowX: 'hidden',
        [theme.breakpoints.down('sm')]: {
            overflowX: 'auto'
        }
    },

    // categoryHeader: { width: "65%" },

    // applicationHeader: { width: "60%" },

    // webHeader: { width: "35%", padding: "0 10px !important" },

    // countHeader: { width: "20%" },

    chipContent: {
        background: theme.palette.primary.grey,
        borderRadius: 3,
        fontSize: 10,
        color: theme.palette.primary.light,
        width: 28,
        // height: 20,
    },

    customWidth: {
        fontSize: 14,
        margin: 0
    },

    tableBody: {

    },
    selected: {
        boxShadow: "0px 14px 34px rgba(8, 148, 253, 0.09)",
        cursor: "pointer",
        "& td": {
            color: '#00AFEF',
        },
    },
    unSelected: {
        cursor: "pointer"
    },
    table: {
        width: "100%",
        borderSpacing: '0px',
        display: 'table',
        tableLayout: 'fixed',
        [theme.breakpoints.down('sm')]: {
            tableLayout: 'auto',
        }
    },
    tableHeading: {
        top: 1,
    },
    row: {
        borderBottom: "1px solid",
        borderBottomColor: 'rgba(0,0,0,0.1)',
        fontSize: 16,
        // padding: '10px',
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "100%",
        color: "#000000",
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '10px 20px',
    },

    actionButton: {
        minWidth: 'unset',
        //  justifyContent: 'flex-end',
        // minWidth: 40,
        width: 40,
        height: 29,
        background: theme.palette.primary.grey,
        borderRadius: 5,
        margin: 0
        // padding: '0px 8px',
        // margin: '-4px 0'
    },

    iconButton: {
        borderBottom: "1px solid",
        borderBottomColor: 'rgba(0,0,0,0.1)',
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "100%",
        color: "#000000",
        display: 'flex',
        //justifyContent: 'flex-end',
        // padding: 10
        padding: '8px 10px'
    },
    tableRow: {
        '&:hover': {
            background: "#eee",
        },
    },
    th: {
        opacity: "0.5",
        color: "#000000",
    },
    tableHead: {
        color: 'rgba(0,0,0,0.5)',
        // opacity:0.45,
        fontSize: 16,
        background: "#FFFFFF",
        whiteSpace: "nowrap",
        top: 0,
        // wordWrap: "break-word",
        // textOverflow: 'ellipsis',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
        //padding:'10px 0px 10px 20px',
        padding: '10px 20px',
        // padding: 10,
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "100%",
        borderBottom: "1px solid",
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderTop: "1px solid",
        borderTopColor: 'rgba(0,0,0,0.1)',
        [theme.breakpoints.only('xs')]: {
                left:"unset"
        },
        [theme.breakpoints.down('md')]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
    },
    productive: {
        display: "flex",
        width: 5,
        marginRight: 4
    },
    selectedRow: {
        display: "table-cell",
    },
    text: {
        // whiteSpace: "nowrap",
        // wordWrap: "break-word",
    },
    // customWidth: {
    //     margin: 0
    // },
    tableNoData: {
        height: "10%"
    },

    arrowContainer: { fontSize: "1rem !important" },


    expendableRow: {
        cursor: "pointer",
        '&:hover': {
            background: "hsl(240deg 40% 98%) !important",
        }
    }
});

export default withStyles(styles)(ApplicationTableRows);


