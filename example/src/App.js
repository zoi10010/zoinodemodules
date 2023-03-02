import React from 'react'

import {
  ZGrid,
  ZTypography, ZHeader, ZNoData,
  ZAppBar,
  ZCommonDialog,
  ZPaper,
  ZCommonTable,
  ZTextField, ZInputAdornment
} from 'zoinodemodules'
import About from '../src/asset/About.svg';
import 'zoinodemodules/dist/index.css'

const data = {
  head: [
    {
      label: 'Employee Name',
      align: 'left',
      isFilter: true,
      filterVal: null,
      index: 0
    },
    {
      label: 'Description',
      align: 'left'
    },
    {
      label: 'Date',
      align: 'left',
      isFilter: true,
      filterVal: {
        startDate: null,
        endDate: null,
        key: 'selection'
      },
      isDateSelection: true,
      index: 2
    },
    {
      label: 'From Time',
      align: 'left'
    },
    {
      label: 'To Time',
      align: 'left'
    },
    {
      label: 'Action',
      align: 'right'
    }
  ],
  body: [
    [
      'Melvin ',
      'test',
      '05 Apr 2021',
      '7:00PM',
      '7:55PM',
      {
        id: 102,
        isDelete: true,
        name: "Delete"
      }
    ], [
      'solomon',
      'test',
      '05 Apr 2021',
      '7:00PM',
      '7:55PM',
      {
        id: 102,
        isDelete: true,
        name: "Delete"
      }
    ], [
      'Melvin Pichaimani',
      'test',
      '05 Apr 2021',
      '7:00PM',
      '7:55PM',
      {
        id: 102,
        isDelete: true,
        name: "Delete"
      }
    ], [
      'Melvin',
      'test',
      '05 Apr 2021',
      '7:00PM',
      '7:55PM',
      {
        id: 102,
        isDelete: true,
        name: "Delete"
      }
    ]
  ]

}

const App = () => {


  return <div>
    <ZTextField />
    <ZHeader title={"helloss"}></ZHeader>
    {/* <ZPaper elevation={0} />
    <ZPaper />
    <ZPaper elevation={3} /> */}
    {/* <ZTextField />
    <ZAppBar position="static">
      <p>Zoi Fintech</p>
    </ZAppBar>
    <ZNoData></ZNoData>
   
    <ZTypography>hello</ZTypography> */}

    {/* <ZGrid container >
      <ZCommonTable isPagination={true} isLoading={false} data={data} />

      <img height={20} src={About} />
    </ZGrid> */}
    {/* <ZCommonDialog open={true} close={() => {}} head="User Details" actionButton={[{ name: 'Cancel', action: {}, variant: "outlined", color: "primary" }, { name: 'ok', action: {}, variant: "contained", color: "primary" }]}>
        <div>This is common dialog</div>
      </ZCommonDialog> */}
  </div>
}

export default App



