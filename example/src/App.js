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


const theme = createTheme ({
  palette: {
      primary: {
        main: "#4a72f5",
        light: "#FF9933",
        grey: "#FF9966"
      },
      secondary: {
        contrastText: "#fff",
        dark: "#FF9567",
        light: "#FF9567",
        main: "#FF9567"
      },
      text: {
        primary: "#000000",
        secondary: "#9B9B9B",
        chartTitle: "#616161",
        placeholder: "#B1B1B1",
      },
  },

  typography: {
      fontFamily: 'Poppins'
  },

  components: {
      // Name of the component
    // ZHeader:{
    //   styleOverrides:{
    //     gridHeader:{
    //       "&.MuiTypography-body1":{
    //           fontSize:Constants.fontSize.xl,
    //         }
    //       }      
    //     }
    // },

    MuiBackdrop:{
      styleOverrides:{
        root:{
          background:Colors.fadedWhite,
        },

        invisible:{
          background: "transparent"
        }
      }
    },

    MuiMenu:{
      styleOverrides: {
        paper: {            
          boxShadow:Constants.boxShadow.modalShadow,
          borderRadius: 8
        }
      },
    },

    MuiListItemIcon:{
      styleOverrides: {
        root: {            
          color:"#667090"
        }
      },
    },

    MuiListItemButton:{
      styleOverrides: {
        root:{  
          '&.Mui-selected': {
            color: '#b26500',
            backgroundColor: '#F0F3F3',
              "& div.MuiListItemIcon-root":{
                color: '#b26500',
              }
          },         
        }
      }
    },
    
    MuiDialog:{
      styleOverrides: {
        paper: {            
          boxShadow:Constants.boxShadow.modalShadow,
          borderRadius: 8
        }
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        // Name of the slot
        root: {
              fontWeight: Constants.fontWeight.lg,
              fontSize: Constants.fontSize.lg,
              borderBottom:`${Constants.border.solid} ${Colors.lightGray}`, 
                         
        },
      },
    },

    MuiDialogContent:{
      styleOverrides: {
        root: {
            paddingTop: "1rem !important",
            fontFamily: 'Poppins',
        },
        dividers:{          
            borderColor: `${Colors.grayishBlue} !important`,
        }
      },
    },

    MuiDialogContentText:{
      styleOverrides: {
        root: {
            color:`${Colors.secondary} !important`
        }
      },
    },

    // Name of the component
    MuiDialogActions: {
      styleOverrides: {
        // Name of the slot
        root: {
          gap: 5,
          padding: '16px 24px',
          "&  button.MuiButtonBase-root > img":{
              display:"none"
          }
        },
      },
    },

    MuiCircularProgress:{
      styleOverrides: {
        root: {
         position:Constants.position.absolute,
         color:Colors.white

        },
      },
    },

    MuiButton:{
      styleOverrides:{
        outlinedPrimary:{
          border: `0.5px solid ${Colors.primary}`,
          color: `${Colors.primary}`,
        },

        outlinedSecondary:{
          border: '0.5px solid #FF9567',
          color: "#FF9567",
        }
      }
    },

    MuiButtonBase:{
      styleOverrides: {
        root: {
          borderRadius: Constants.borderRadius.xs, 
          fontSize: Constants.fontSize.md,
          fontWeight: Constants.fontWeight.sm,
          lineHeight: Constants.lineHeight.md,
          boxShadow:`${Constants.boxShadow.none} !important`,
          textTransform:`${Constants.textTransform.capital} !important`,
          padding:".375rem 1rem !important",
          minHeight:37,
          margin:"0 !important",
          "&:hover":{
              boxShadow:Constants.boxShadow.none,
          },

          "& > p.MuiTypography-root":{
            fontSize: `${Constants.fontSize.sm} !important`,
          },

          // "& .MuiIconButton-root":{
           
          // }

          // '& + span': {
          //     right: Constants.inset.md,
          //     position: Constants.position.absolute
          // }
        },
      },
    },

    MuiInputAdornment:{
      styleOverrides:{
          positionEnd:{
            "& button.MuiButtonBase-root.MuiIconButton-root":{
              padding:"0 !important",
              pointerEvents:"none"
            },            
          },

          positionStart:{
            "&.MuiInputAdornment-root":{
              pointerEvents:"none"
            },
            
          }
      }
    },

    MuiOutlinedInput:{
      styleOverrides: {
          notchedOutline:{
            borderColor: Colors.border
          },

          root:{
            '&:hover': { 
              "& > .MuiOutlinedInput-notchedOutline":{
                  borderColor:Colors.highlightedBorder
              }
            }   
          },

          input:{
            padding: "0.53125rem 0.875rem"
          }
        },
    },

    MuiInputBase:{
      root:{  
      },

      input:{
          padding:"0.53125rem 0.875rem !important",    
      },
   
      adornedEnd:{
        paddingRight: ".65rem"
      }
    },

    MuiFormLabel:{
      styleOverrides:{
        root:{
          color:Colors.placeholder,
          fontSize:Constants.fontSize.sm,
          "&.Mui-focused":{
            fontSize: `${Constants.fontSize.md} !important`,
          }
        }
      }
    },

    MuiInputLabel:{
      styleOverrides:{     
        outlined:{         
          top:"-6px !important",
          "&.Mui-focused":{
            top:"0px !important"
          }
        },
        
        standard:{
          "& + .MuiInputBase-root":{
            "&:before":{
              borderBottom: `${Constants.border.solid} ${Colors.border}`,
            },
     
            "&:hover":{
              "&:before":{
                borderBottom: `${Constants.border.solid} ${Colors.highlightedBorder}`,
              }
            } ,         
     
            "& + .MuiInputBase-root:after":{
                borderBottom: `${Constants.border.solid} ${Colors.highlightedBorder}`,
            }
        }
      }
    }
  },

    MuiFormControl:{
      styleOverrides:{
        root:{
          width:"100%"
        }
      }                         
    },

    MuiFormHelperText:{
      styleOverrides:{
        root:{
          color:Colors.red
        }
      }
    },

    MuiAutocomplete:{
      styleOverrides:{
        root:{
          "& .MuiOutlinedInput-root":{
            padding: "0.5px 9px !important",
          },

          "& .MuiFormLabel-root":{
            top:"-8px !important",
            "&.Mui-focused":{
              top:"0px !important"
            }
          },
                
        },
        endAdornment:{
          top:"unset !important",
          right:"5px !important",
          "& button.MuiButtonBase-root":{
            paddingRight:".3125rem !important"
          }
        }
      }
    },

    MuiDivider:{
      styleOverrides:{
        root:{
          borderColor:Colors.border
        }
      }
    },

    MuiCardHeader:{
      styleOverrides:{
        title:{
          fontSize:"1.25rem",
        }
      }
    },

    MuiTableCell:{
      styleOverrides:{
        head:{
          color:Colors.fadedBlack,
          padding:"0.3125rem 1rem"
        },

        body:{
          padding:".5rem 1rem"
        }
      }
    }
  },
});

export default App



