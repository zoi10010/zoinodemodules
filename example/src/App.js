import React from 'react'

import {
  ZGrid,
  ZTypography, ZHeader, ZNoData,
  ZAppBar,
  ZCommonDialog,
  ZPaper,
  ZCommonTable,
  ZTextField, ZInputAdornment, ZButton
} from 'zoinodemodules'

import About from '../src/asset/About.svg';
import 'zoinodemodules/dist/index.css'
import { alpha,  createTheme, ThemeProvider ,styled} from '@mui/material/styles';
import Colors from './constants/Colors';
import Constants from './constants/ConstantCSS';
import{makeStyles} from '@mui/styles'


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

  const classes = useStyles();
  return <div>
            <ZTextField/>
             <ZHeader title={"hello"}></ZHeader>
          {/* <Zpaper className={classes.paperContainer} elevation={0}>
          <ZGrid sx={{m:2}}> 
              <ZHeader variant="h1" className={classes.dsds} title={"Daily Report"}></ZHeader>
              <ZTypography variant="body2">You can't undo this operation </ZTypography>
          </ZGrid>
            <ZGrid sx={{p:2}} container spacing={4}>
                <ZGrid item xs={3}>
                  <ZTextBox
                    id="standard-search"
                    label="Email"
                  />
                </ZGrid>
                <ZGrid item xs={3}>
                  <ZTextBox
                    id="standard-search"
                    label="Password"
                  />
                </ZGrid>                         
                <ZGrid item xs={3}>
                  <ZTextBox
                      id="standard-search"
                      label="Password"
                      variant={Constants.variant.standard}
                  />
                </ZGrid>   
                <ZGrid item xs={3}>
                    <ZTextBox variant={Constants.variant.standard}
                        label="Username"
                        InputProps={{
                            startAdornment: <InputAdornment position={Constants.position.start}><span><PersonIcon/></span></InputAdornment>
                        }}
                        >
                    </ZTextBox>
                  </ZGrid>    

                  <ZGrid item xs={3}>
                    <ZTextBox variant={Constants.variant.outlined}
                    
                        label="Username"
                        InputProps={{
                            endAdornment: <InputAdornment position={Constants.position.end}>
                              <ZIconButton sx={{p:0}}><PersonIcon/></ZIconButton>
                              </InputAdornment>
                        }}
                        helperText="Please enter your name"
                        >
                    </ZTextBox>
                  </ZGrid>  

                  <ZGrid item xs={3}>
                    <ZTextBoxSearch placeholder="Search Icons"></ZTextBoxSearch>
                  </ZGrid> 

                  <ZGrid row item xs={3}>
                    <ZFormControl>
                      <FormLabel id="demo-customized-radios">Select User</FormLabel>
                      <ZRadioGroup row className={classes.radioButtonGroup}>
                            <ZFormControlLabel sx={{ml:1}} value="dept" control={<ZRadio color={Constants.color.primary} />} label="department" />
                            <ZFormControlLabel sx={{ml:1}} value="user" control={<ZRadio color={Constants.color.primary} />} label="UserWise" />
                        </ZRadioGroup>
                      </ZFormControl>
                  </ZGrid> 
                  
                  <ZGrid item xs={3} sx={{display:"flex"}}>
                      <ZFormControlLabel
                          value="end"
                          control={<ZCheckbox />}
                          label="Standard"
                          labelPlacement={Constants.position.end}
                        />                 
                  </ZGrid> 

                  <ZGrid item xs={12}>
                      <ZDivider></ZDivider>
                  </ZGrid>

                  <ZGrid item xs={3} container>
                      <Box>
                        <ZButton  sx={{m:2}} name="Open Confirmation dialog" elevation={0} variant={Constants.variant.contained} onClick={() => setOpen (true)}>            
                        
                        </ZButton>
                        <ZDialog open={open} onClose={() => setOpen (false)} role="Open Confirmation dialog">  
                          <DialogTitle id="alert-dialog-title" dividers>
                              {"Confirmation"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Are you sure you want to discard all of your notes?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <ZButton onClick={handleClose} variant={Constants.variant.outlined}>Cancel</ZButton>
                            <ZButton onClick={handleClose} autoFocus variant={Constants.variant.contained}> Discard notes </ZButton>
                          </DialogActions>
                        </ZDialog>
                      </Box> 
                  </ZGrid>

                  <ZGrid item xs={3}>
                    <ZAutoComplete
                      label="combo-box-demo"
                      data={countries}
                      error={3}
                    />
                    
                  </ZGrid>
                  
                  <ZGrid item container xs={3} sx={{gap:2}}>
                      <ZButton variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                      </ZButton>
                      <ZButton variant="contained" endIcon={<SendIcon />}>
                        Send
                      </ZButton>
                  </ZGrid>

                  <ZGrid item xs={12}>
                      <Box>
                        <ZButton variant={Constants.variant.outlined} onClick={handleClickOpen}>
                        Open form dialog
                        </ZButton>
                          <ZDialog open={open} onClose={handleClose} scroll="paper">
                            <DialogTitle>Subscribe</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                To subscribe to this website, please enter your email address here. We
                                will send updates occasionally.
                              </DialogContentText>
                              <ZTextBox
                                autoFocus
                                fullWidth 
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"                  
                                variant={Constants.variant.standard}
                              />
                            </DialogContent>
                            <DialogActions>
                              <ZButton onClick={handleClose} variant={Constants.variant.outlined}>Cancel</ZButton>
                              <ZButton onClick={handleClose} variant={Constants.variant.contained}>Subscribe</ZButton>
                            </DialogActions>
                          </ZDialog>
                      </Box>

                        <ZCard 
                          key={0} 
                          name={"Info card"} 
                          icon={nature} 
                          description={"Card description"} 
                          color={Colors.primary} 
                          background={Colors.whiteSmoke}
                        />
                  </ZGrid>
            </ZGrid>
          </Zpaper> */}

      
    {/* <ZTextField /> */}
    {/* <ZDropzone
      accept={".png,.PNG,.jpg,.JPG,.jpeg,.JPEG"}

      onDrop={(acceptedFiles) => this.fileDrop(acceptedFiles)}
      file={this.state.profilepic}
      fileSrc={this.state.profilepic.value}
      error={this.state.profilepic.error}
      remove={this.removeImage} /> */}
    {/* <ZHeader title={"helloss"}></ZHeader> */}
    {/* <ZPaper elevation={0} />
    <ZPaper />
    <ZPaper elevation={3} /> */}
    {/* <ZTextField />
    <ZAppBar position="static">
      <p>Zoi Fintech</p>
    </ZAppBar>
    <ZNoData></ZNoData>
   
    */}

    {/* <ZGrid container >
      <ZCommonTable isPagination={true} isLoading={false} data={data} />
    </ZGrid> */}

      <img height={20} src={About} />

    {/* <ZCommonDialog open={true} close={() => {}} head="User Details" actionButton={[{ name: 'Cancel', action: {}, variant: "outlined", color: "primary" }, { name: 'ok', action: {}, variant: "contained", color: "primary" }]}>
        <div>This is common dialog</div>
      </ZCommonDialog> */}
      
  </div>
}

const useStyles = makeStyles(({
  root:{
      padding:"1rem"
  },

  paperContainer:{
    marginBottom:"1rem",
    paddingBottom:"1rem",
    border: `2px solid ${Colors.solitude}`,
    borderRadius:`${Constants.borderRadius.sm} !important`
  },

}));




export default App



