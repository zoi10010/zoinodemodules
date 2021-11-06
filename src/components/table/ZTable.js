import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ZNoData from '../../components/noData/ZNoData';
import ZmTable from './ZmTable';
import ZTableBody from './ZTableBody';
import ZTableCell from './ZTableCell';
import ZTableContainer from './ZTableContainer';
import ZTableHead from './ZTableHead';
import ZTableRow from './ZTableRow';
import Tooltip from '@material-ui/core/Tooltip';
import { TableCell } from '@material-ui/core';
import ZTableFooter from '../../components/table/ZTableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import { Button } from '@material-ui/core';
import ZTypography from '../../components/typography/ZTypography'
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import ZPaper from '../paper/ZPaper';
import ZGrid from '../../components/grid/ZGrid';
import ZSkeleton from '../../components/SkeletonLoader/ZSkeleton'
import ascending from '../../asset/svg/ascending-sort-icon.svg'
import descending from '../../asset/svg/descending-sort-icon.svg'
import excelIcon from '../../asset/svg/csvicon.svg';
import Icon from '@material-ui/core/Icon';
// import pdfIcon from '../../asset/images/pdficon.svg'
import { CSVLink, CSVDownload } from "react-csv";
import ZAvatar from '../../components/avatar/ZAvatar'
// import toast from 'react-hot-toast';
// import ZIconButton from '../../components/icon/ZIconButton';
// import ZCountryList from '../../components/dropdown/ZCountryList'
// import FilterList from '@material-ui/icons/FilterList';
import DeleteIcon from '@material-ui/icons/Delete';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

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
            selectedRow: 0,
            open: false,
            page: 0,
            rowsPerPage: 10,
            data: { head: [], body: [] },
            index0: false,
            index1: false,
            index2: false,
            index3: false,
            index4: false,
            index5: false,
            index6: false,
            index7: false,
            index8: false,
            index9: false,
            show: null,
            order: "",
            exportData: [],
        }
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        })
    };
    componentDidMount() {
        this.setState({ data: this.props.data, show: null, exportData: this.CsvData() })
    }

    UrlExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status != 404;
    }

    download = (e) => {
        if (this.UrlExists(e)) {
            const link = document.createElement("a");
            link.download = e.split("\\CSV\\")[1];
            link.href = e;
            link.target = '_blank';
            link.click();
        }
        else {
            // toast.error("File Not Found")
        }


    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({ exportData: this.CsvData() })
            if (this.state.order == "") {
                if (this.props.withOutSearch) {
                    this.setState({
                        data: this.props.data,
                    })
                } else if (this.props.selectedRow) {
                    this.setState({
                        data: this.props.data,
                        page: this.props.search ? 0 : this.state.page,
                    })
                } else {
                    this.setState({
                        data: this.props.data,
                        page: 0
                    })
                }

            }
            else {
                var data = this.state.order == "ASC" ? this.props.data.body.sort((a, b) => {
                    return this.ascending(a[this.state.show], b[this.state.show])
                }) :
                    this.props.data.body.sort((a, b) => {
                        return this.descending(a[this.state.show], b[this.state.show])
                    })
                this.setState({ data: { ...this.state.data, body: data } })
            }
            if (this.props.data.body != undefined && this.props.data.body.length > 0 && this.props.selectedRow) {
                if (this.state.selectedRow == 0) {

                    this.setState({
                        selectedRow: this.props.selectedRow,
                        page: 0
                    })
                }
            }
        }
    }
    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    };

    rowSelect = (items, i, e) => {
        if (this.props.rowSelect) {
            this.setState({
                selectedRow: i
            })
            this.props.onClick(items)
        }
    }

    ascending = (a, b) => {
        var value1 = new Date(a)
        var value2 = new Date(b)
        if (value1 == "Invalid Date") {
            if (typeof a != "object" && typeof b != "object") {
                return (a.toLowerCase() < b.toLowerCase()) ? -1 : 1;
            }
            else {
                if (typeof a == "object" && a.isAvatar) {
                    return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0
                } else {
                    return (a < b) ? -1 : (a > a) ? 1 : 0
                }
            }
        }
        else {
            return (value1 < value2) ? -1 : 1;
        }
    }

    descending = (a, b) => {
        var value1 = new Date(a)
        var value2 = new Date(b)
        if (value1 == "Invalid Date") {
            if (typeof a != "object" && typeof b != "object") {
                return (a.toLowerCase() > b.toLowerCase()) ? -1 : 1;
            }
            else {
                if (typeof a == "object" && a.isAvatar) {

                    return (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() < a.name.toLowerCase()) ? 1 : 0
                } else {
                    return (a > b) ? -1 : (a < a) ? 1 : 0
                }
            }
        }
        else {
            return (value1 > value2) ? -1 : 1;
        }
    }

    onSortClick = (index) => {
        this.setState({ show: index })
        if (index == 0) {
            var data = this.state.index0 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index0) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index0: false, index1: false, index2: false, index3: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index0: true, index1: false, index2: false, index3: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
        }
        else if (index == 1) {
            var data = this.state.index1 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index1) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index1: false, index0: false, index2: false, index3: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index1: true, index0: false, index2: false, index3: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
        }
        else if (index == 2) {
            var data = this.state.index2 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index2) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index2: false, index1: false, index0: false, index3: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index2: true, index1: false, index0: false, index3: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
        }
        else if (index == 3) {
            var data = this.state.index3 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index3) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index3: false, index1: false, index2: false, index0: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index3: true, index1: false, index2: false, index0: false, index4: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
        }
        else if (index == 4) {
            var data = this.state.index4 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index4) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index4: false, index1: false, index2: false, index3: false, index0: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index4: true, index1: false, index2: false, index3: false, index0: false, index5: false, index6: false, index7: false, index8: false, index9: false })
            }
        }
        else if (index == 5) {
            var data = this.state.index5 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index5) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index5: false, index1: false, index2: false, index3: false, index4: false, index0: false, index6: false, index7: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index5: true, index1: false, index2: false, index3: false, index4: false, index0: false, index6: false, index7: false, index8: false, index9: false })
            }
        }
        else if (index == 6) {
            var data = this.state.index6 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index6) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index6: false, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index6: true, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: false, index9: false })
            }
        }
        else if (index == 7) {
            var data = this.state.index7 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index7) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index7: false, index6: false, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index7: true, index6: false, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: false, index9: false })
            }
        }
        else if (index == 8) {
            var data = this.state.index8 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index8) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index7: false, index6: false, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index7: false, index6: false, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: true, index9: false })
            }
        }
        else if (index == 9) {
            var data = this.state.index9 == false ? this.state.data.body.sort((a, b) => {
                return this.ascending(a[index], b[index])
            }) :
                this.state.data.body.sort((a, b) => {
                    return this.descending(a[index], b[index])
                })
            if (this.state.index9) {
                this.setState({ order: "DESC" })
                this.setState({ data: { ...this.state.data, body: data }, index7: false, index6: false, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: false, index9: false })
            }
            else {
                this.setState({ order: "ASC" })
                this.setState({ data: { ...this.state.data, body: data }, index7: false, index6: false, index1: false, index2: false, index3: false, index4: false, index5: false, index0: false, index8: false, index9: true })
            }
        }
    }

    renderCell = (value, index, classes) => {
        const cell = [value.label == "Action" || value.label == "" ?
            <span className={classes.pointer} onClick={() => this.onSortClick(index)} key={index}>{value.label}</span>
            :
            <span className={classes.displayFlex} key={index}>
                {value.label != "Action" || value.label != "" || value.label != "Export Type" ?
                    <span className={classes.pointer} onClick={() => this.onSortClick(index)}>{value.label}</span>
                    :
                    <span className={classes.pointer}>{value.label}</span>
                }
                {this.state.show != 0 ? "" : index == 0 &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index0 == false ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 1 ? "" : index == 1 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index1 == false ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 2 ? "" : index == 2 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index2 == false ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 3 ? "" : index == 3 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index3 == false ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 4 ? "" : index == 4 && value.label != "Action" && value.label != "Export Type" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index4 == false ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 5 ? "" : index == 5 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index5 == false ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 6 ? "" : index == 6 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index6 == false ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 7 ? "" : index == 7 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index7 == true ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 8 ? "" : index == 8 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index8 == true ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
                {this.state.show != 9 ? "" : index == 9 && value.label != "Action" && value.label != "" &&
                    <span className={classes.floatPointer} onClick={() => this.onSortClick(index)}>{this.state.index9 == true ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</span>
                }
            </span>
        ]
        return cell
    }

    CsvData = () => {
        var csvData = []
        if (this.props.data.head != undefined && this.props.data.body != undefined) {
            var csvHeader = []
            this.props.data.head.map((item) => {
                if (item.label != "Action" && item.label != "") {
                    csvHeader.push(item.label)
                }
            })
            csvData.push(csvHeader)
            this.props.data.body.map((item, index) => {
                var array = []
                item.map((value) => {
                    if (typeof value != 'object') {
                        array.push(value)
                    } else {
                        if (value.status != undefined) {
                            array.push(value.status)
                        }
                    }
                })
                csvData.push(array)
            })
        }
        return csvData
    }
    exportCsv = () => {
        this.csvLink.link.click()
    }

    onChange = (e, value, index) => {
        value.filterVal = e
        var data = this.state.data.head
        data[index] = value
        this.setState({
            data: { ...this.state.data, head: data }
        })


        var selectedValue = data.filter((i, index) => {
            if (i.isFilter && i.filterVal) {
                return { ...i }
            }
        }).map(i => {
            return { value: i.filterVal.value, index: i.index }
        })
        this.props.submitFilter(selectedValue, data)
    }

    render() {
        const { classes } = this.props;
        const data = this.state.data;

        return (
            <ZPaper elevation={0} style={{ borderBottom: '0.1px solid #80808059' }}>
                {this.props.csv == true && this.props.data.body.length > 0 &&
                    <img src={excelIcon} className={classes.csvExportTable} onClick={this.exportCsv} />
                }
                <CSVLink data={this.state.exportData} filename={this.props.fileName} ref={(r) => this.csvLink = r} />

                {this.props.filter &&
                    <div style={{ backgroundColor: "#f7f8ff", padding: 20 }}>
                        <ZGrid
                            container
                            direction={"row"}
                            className={classes.gridMarginTop}
                            spacing={2}
                        >
                            {data.head != undefined && data.head.map((value, index) => {
                                var LabelList = this.props.fullData.body.map(i => {
                                    if (typeof i[index] == "object" && i[index].isStatus) {
                                        return i[index].name
                                    }
                                    else if (typeof i[index] == "object" && i[index].isAvatar) {
                                        return i[index].name
                                    }
                                    else {
                                        return i[index]
                                    }
                                })
                                const uniqueList = LabelList.filter((ele, ind) => ind === LabelList.findIndex(elem => elem === ele)).map(i => {
                                    return { value: i, name: i }
                                }).sort((a, b) => {
                                    return this.ascending(a.name, b.name)
                                })
                                if (value.isFilter) {
                                    return (
                                        <ZGrid key={index} item md={3}>
                                            {/* <ZCountryList
                                                label={value.label}
                                                data={uniqueList}
                                                selectvalue={(e) => this.onChange(e, value, index)}
                                                value={value.filterVal}
                                                Loading={false}
                                            /> */}
                                        </ZGrid>
                                    )
                                }
                            })
                            }
                        </ZGrid>
                    </div>
                }
                <ZTableContainer className={this.props.isLoading == false ? this.props.rowSelect && this.props.isPagination ? classes.container : classes.dashboardContainer : classes.container}>

                    <ZmTable className={classes.table} stickyHeader aria-label="sticky table">
                        <ZTableHead style={{ background: '#ffff' }}>
                            <ZTableRow>
                                {data.head != undefined && data.head.map((value, index) => {
                                    if (index == 0 && this.props.rowSelect && this.props.isPagination) {
                                        return (
                                            <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} key={index} className={classNames(classes.tableHead, classes.categoryHeader)} align={value.align} tooltip={value.label}>
                                                {this.renderCell(value, index, classes)}
                                            </ZTableCell>
                                        )
                                    }
                                    else if (index == 0 && this.props.rowSelect) {
                                        return (
                                            <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} key={index} className={classNames(classes.tableHead, classes.applicationHeader)} align={value.align} tooltip={value.label}>
                                                {this.renderCell(value, index, classes)}
                                            </ZTableCell>
                                        )
                                    }
                                    else if (index > 0 && this.props.rowSelect) {
                                        return (
                                            <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} key={index} className={classNames(classes.tableHead, classes.webHeader)} align={value.align} tooltip={value.label}>
                                                {this.renderCell(value, index, classes)}
                                            </ZTableCell>
                                        )
                                    }
                                    if (this.props.rowSelect && this.props.isPagination) {
                                        return (
                                            <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} key={index} className={classNames(classes.tableHead, classes.countHeader)} align={value.align} tooltip={value.label}>
                                                {this.renderCell(value, index, classes)}
                                            </ZTableCell>
                                        )
                                    }
                                    else if ((index == 0) && this.props.isTimeline) {
                                        return (
                                            <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} key={index} className={classNames(classes.tableHead, classes.timelineAvatarHeader)} align={value.align} tooltip={value.label}>
                                                {this.renderCell(value, index, classes)}
                                            </ZTableCell>
                                        )
                                    }
                                    else {
                                        return (
                                            <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} key={index} className={classes.tableHead} align={value.align} tooltip={value.label}>
                                                {this.renderCell(value, index, classes)}
                                            </ZTableCell>
                                        )
                                    }
                                })}

                            </ZTableRow>
                        </ZTableHead>
                        {this.props.isLoading == false ? data.body != undefined && data.body.length > 0 ?
                            <ZTableBody>
                                {(this.state.rowsPerPage > 0 && this.props.isPagination
                                    ? data.body.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                    : data.body
                                ).map((items, i) => (
                                    <ZTableRow hover key={i} onClick={(e) => this.rowSelect(items, items[3], e)} className={this.props.rowSelect ? this.state.selectedRow == items[3] ? classes.selected : classes.unSelected : ""}>
                                        {data.head != undefined && data.head.map((value, index) => {
                                            if (index == 0 && !this.props.rowSelect) {
                                                if (typeof items[index] == "object" && items[index].isAvatar) {
                                                    return (
                                                        <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.avatarRow} key={index} align={value.align} onClick={() => this.props.onCellClick(items)} style={{ cursor: "pointer" }}>
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                {items[index].avatar.length > 2 ?
                                                                    <ZAvatar className={classes.imageAvatar} src={items[index].avatar} >
                                                                    </ZAvatar>
                                                                    :
                                                                    <ZAvatar className={classes.smallAvatar}>
                                                                        {items[index].avatar}
                                                                    </ZAvatar>
                                                                }
                                                                <Tooltip classes={{ tooltip: classes.customWidth }} title={items[index].name} arrow placement="bottom-start">
                                                                    <span className={classes.userName}>{items[index].name}</span>
                                                                </Tooltip>
                                                            </div>
                                                        </ZCell>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                            {items[index]}
                                                        </ZTableCell>
                                                    )
                                                }
                                            }
                                            else if (items[index].isStatus == true) {
                                                if (items[index].name == "Completed") {
                                                    return (
                                                        <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                <span className={classes.dot} style={{ backgroundColor: "#5CB85C" }}></span>
                                                                <ZTypography style={{ color: "#5CB85C" }}>{items[index].name}</ZTypography>
                                                            </div>
                                                        </ZCell>
                                                    )
                                                } else {
                                                    return (
                                                        <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                <span className={classes.dot} style={{ backgroundColor: "#FF9567" }}></span>
                                                                <ZTypography style={{ color: "#FF9567" }}>{items[index].name}</ZTypography>
                                                            </div>
                                                        </ZCell>
                                                    )
                                                }
                                            }
                                            else if (typeof items[index] == "object" && items[index].isProdButton === true) {
                                                return (
                                                    <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                        <Chip className={classes.chipContent} size="small" label="hello" />
                                                    </ZCell>
                                                )
                                            }
                                            else if (typeof items[index] == "object" && items[index].isDelete === true) {
                                                return (
                                                    <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                        <Tooltip classes={{ tooltip: classes.customWidth }} key={index} title={items[index].name} arrow>
                                                            <Button size="small" className={classes.actionButton} color="primary" onClick={(e) => this.props.onActionClick(items, data.name, e)}>
                                                                <DeleteIcon style={{color:"#555"}} />
                                                            </Button>
                                                        </Tooltip>
                                                    </ZCell>
                                                )
                                            }

                                            else if (value.isChip) {
                                                return (
                                                    <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                        <Chip className={classes.chipContent} size="small" label={items[index]} />
                                                    </ZCell>
                                                )
                                            }
                                            else if (value.isButton) {
                                                return (
                                                    <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.iconButton} key={index} align={value.align}>
                                                        {value.child.map((data, index) => (
                                                            <Tooltip classes={{ tooltip: classes.customWidth }} key={index} title={data.name} arrow>
                                                                <Button size="small" className={classes.actionButton} color="primary" onClick={(e) => this.props.onActionClick(items, data.name, e)}>
                                                                    {/* <img src={data.icon}></img> */}
                                                                    <Icon>{data.icon}</Icon>
                                                                </Button>
                                                            </Tooltip>
                                                        ))}
                                                    </ZCell>
                                                )
                                            }
                                            else if (value.isIcon) {
                                                return (
                                                    <ZCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                        {value.child.map((data, index) => (
                                                            <Tooltip classes={{ tooltip: classes.customWidth }} key={index} title={data.name} arrow>
                                                                <Button size="small" className={classes.iconActionButton} color="primary" onClick={() => this.props.onActionClick(items, data.name)}>
                                                                    <img src={data.icon}></img>
                                                                </Button>
                                                            </Tooltip>
                                                        ))}
                                                    </ZCell >
                                                )
                                            }
                                            else {
                                                return (
                                                    <ZTableCell colSpan={value.colSpan ? value.colSpan : 1} className={classes.row} key={index} align={value.align}>
                                                        {items[index] || "-"}
                                                    </ZTableCell>
                                                )
                                            }
                                        }
                                        )}

                                    </ZTableRow>
                                ))}
                            </ZTableBody>

                            :
                            <ZTableBody>
                                <ZTableRow>
                                    <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none', lineHeight: this.props.button ? 9 : 20, backgroundColor: "#fff" }}>
                                        <ZNoData height={20} />
                                    </TableCell>
                                </ZTableRow>
                            </ZTableBody>
                            :
                            <ZTableBody>
                                <ZTableRow>
                                    <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                    </TableCell>
                                </ZTableRow>
                                <ZTableRow>
                                    <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                    </TableCell>
                                </ZTableRow>
                                <ZTableRow>
                                    <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                    </TableCell>
                                </ZTableRow>
                                <ZTableRow>
                                    <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                        <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                    </TableCell>
                                </ZTableRow>
                                {this.props.isCategoryTable &&
                                    <ZTableRow>
                                        <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                            <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                        </TableCell>
                                    </ZTableRow>
                                }
                                {this.props.isCategoryTable &&
                                    <ZTableRow>
                                        <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                            <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                        </TableCell>
                                    </ZTableRow>
                                }
                                {this.props.isCategoryTable &&
                                    <ZTableRow>
                                        <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                            <ZSkeleton height={"100%"} animation="pulse"></ZSkeleton>
                                        </TableCell>
                                    </ZTableRow>
                                }
                                {this.props.isCategoryTable &&
                                    <ZTableRow>
                                        <TableCell colSpan={data.head != undefined ? data.head.length : 2} style={{ borderBottom: 'none' }}>
                                            <ZSkeleton height={"50%"} animation="pulse"></ZSkeleton>
                                        </TableCell>
                                    </ZTableRow>
                                }
                            </ZTableBody>
                        }

                    </ZmTable>
                </ZTableContainer>
                {
                    this.props.isLoading == false && this.props.isPagination ?
                        <ZmTable>
                            <ZTableFooter >
                                <ZTableRow>
                                    <TablePagination
                                        rowsPerPageOptions={data.body != undefined && data.body.length > 0 ? [10, 20, 30] : [10, 20]}
                                        colSpan={2}
                                        count={data.body != undefined && data.body.length > 0 ? data.body.length : 0}
                                        rowsPerPage={data.body != undefined && data.body.length > 0 ? this.state.rowsPerPage : this.state.rowsPerPage}
                                        page={this.state.page}
                                        className={classes.borderbottomnone}
                                        onChangePage={(event, value) => this.handleChangePage(event, value)}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    />
                                </ZTableRow>
                            </ZTableFooter>
                        </ZmTable> : ""
                }

            </ZPaper >
        );
    }
}

const styles = (theme) => ({
    container: {
        // minHeight: "100px",
        maxHeight: 345,
        minHeight: 400,
        width: '100%',
        overflowX: 'hidden',
        //backgroundColor: "#F5F6F9",
        [theme.breakpoints.only('xs')]: {
            overflowX: 'auto'
        }
    },
    reportContainer: {
        maxHeight: "unset",
        minHeight: 80,
        backgroundColor: "#F5F6F9",
        marginBottom: -10
    },
    borderbottomnone: {
        borderBottom: 'none !important',
        padding: 0,
        "& .MuiTablePagination-toolbar": {
            paddingLeft: 20,
            [theme.breakpoints.only('xs')]: {
                paddingLeft: 15,
            }
        },
        float: "left",
        [theme.breakpoints.only('xs')]: {
            '& div.MuiTablePagination-input,div.MuiTablePagination-actions': {
                margin: 0
            }
        },
    },
    dashboardContainer: {
        overflowX: 'hidden',
        [theme.breakpoints.only('xs')]: {
            overflowX: 'auto'
        }
    },
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        backgroundColor: "#0B5C7E",
        marginRight: 5,
        fontSize: 12
    },
    imageAvatar: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.6),
        marginRight: 5,
        fontSize: 12,
        border: "2px solid #0B5C7E",
    },
    categoryHeader: { width: "97%" },
    applicationHeader: { width: "60%" },
    timelineAvatarHeader: { width: "11.5%" },
    webHeader: {
        width: "48%",
        // padding: "0 10px !important"
        //padding: "0 20px 0 0 !important",
        padding: "0 10px 0 0 !important",
        // [theme.breakpoints.down('md')]:{
        // '& span':{
        //     display:"inline-block"
        // }
        // }
    },

    countHeader: { width: "20%" },

    chipContent: {
        background: theme.palette.primary.grey,
        borderRadius: 3,
        fontSize: 10,
        color: theme.palette.primary.light,
        width: 30,
        // height: 20,
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
        [theme.breakpoints.only('xs')]: {
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
        //padding: '10px 20px',
        padding: '10px 8px 10px 20px',
        backgroundColor: theme.palette.common.white
    },
    avatarRow: {
        borderBottom: "1px solid",
        borderBottomColor: 'rgba(0,0,0,0.1)',
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "75%",
        color: "#000000",
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '0px 8px 0px 20px',
        backgroundColor: theme.palette.common.white
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
    iconActionButton: {
        minWidth: 'unset',
        // padding: '0px 0px 0 10px',
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
        padding: '8px 10px',
        backgroundColor: theme.palette.common.white
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
    userName: {
        whiteSpace: "nowrap",
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        paddingTop: 5,
        paddingBottom: 5,
        textDecoration: "underline"

    },
    tableHead: {
        color: 'rgba(0,0,0,0.45)',
        // opacity:0.45,
        fontSize: 16,
        background: "#FFFFFF",
        whiteSpace: "nowrap",
        top: 0,
        // wordWrap: "break-word",
        // textOverflow: 'ellipsis',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
        padding: '10px 10px 10px 20px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        // padding: '10px 20px',
        // padding: 10,
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "100%",
        borderBottom: "1px solid",
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderTop: "1px solid",
        borderTopColor: 'rgba(0,0,0,0.1)',
        [theme.breakpoints.only('xs')]: {
            left: "unset"
        },
        [theme.breakpoints.down('md')]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        // '&:nth-child(n)':{
        //     padding: '10px 8px 10px 10px',
        // }
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
    customWidth: {
        margin: 0,
        fontSize: 14
    },
    tableNoData: {
        height: "10%"
    },
    iconHover: {
        cursor: "pointer"
    },
    pointer: {
        cursor: 'pointer',
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        display: "inline-block",
        [theme.breakpoints.down('md')]: {
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden"
        }
    },
    floatPointer: {
        //     cursor:'pointer',
        //     float:'right',
        //     marginLeft:'-5px'
        position: 'absolute',
        width: '100%',
        margin: 0,
        padding: 0,
        right: 0,
        margin: "0 -22px",
        display: "flex",
        justifyContent: "flex-end",
        // cursor: 'pointer',
        // textAlign: 'right',
        // right: -20, marginRight: -2,
        [theme.breakpoints.down('md')]: {
            float: 'unset',
            marginLeft: 'unset',
        }
    },
    displayFlex: {
        // display:'inline-block',
        // display:"inline-flex",
        position: "relative",
        display: "inline-grid",
        [theme.breakpoints.down('md')]: {
            display: "inline-grid",
        }
    },
    csvExportTable: {
        float: 'right',
        margin: '0px 27px 13px 1px',
        cursor: 'pointer'
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: "50%",
        margin: 5
    }

});

export default withStyles(styles)(ApplicationTableRows);

