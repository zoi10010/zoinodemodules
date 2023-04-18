import React from 'react'

import {
  ZGrid,
  ZTypography, ZHeader, ZNoData,
  ZAppBar,
  ZCommonDialog,
  ZPaper,
  ZCommonTable,
  ZTextField, ZInputAdornment, ZDropZone
} from 'zoinodemodules'

import About from '../src/asset/About.svg';
import 'zoinodemodules/dist/index.css'
import constants from "../../src/utils/constants/ConstantCss";
import { createTheme} from '@mui/material/styles';
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
    <ZDropzone
      accept={".png,.PNG,.jpg,.JPG,.jpeg,.JPEG"}

      onDrop={(acceptedFiles) => this.fileDrop(acceptedFiles)}
      file={this.state.profilepic}
      fileSrc={this.state.profilepic.value}
      error={this.state.profilepic.error}
      remove={this.removeImage} />
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
    </ZGrid> */}

      <img height={20} src={About} />

    {/* <ZCommonDialog open={true} close={() => {}} head="User Details" actionButton={[{ name: 'Cancel', action: {}, variant: "outlined", color: "primary" }, { name: 'ok', action: {}, variant: "contained", color: "primary" }]}>
        <div>This is common dialog</div>
      </ZCommonDialog> */}
  </div>
}

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
              fontWeight: constants.fontWeight.lg,
              fontSize: constants.fontSize.lg,
              borderBottom:`${constants.border.solid} ${Colors.lightGray}`, 
                         
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
         position:constants.position.absolute,
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
          borderRadius: constants.borderRadius.xs, 
          fontSize: constants.fontSize.md,
          fontWeight: constants.fontWeight.sm,
          lineHeight: constants.lineHeight.md,
          boxShadow:`${constants.boxShadow.none} !important`,
          textTransform:`${constants.textTransform.capital} !important`,
          padding:".375rem 1rem !important",
          minHeight:37,
          margin:"0 !important",
          "&:hover":{
              boxShadow:constants.boxShadow.none,
          },

          "& > p.MuiTypography-root":{
            fontSize: `${constants.fontSize.sm} !important`,
          },
        },
      },
    },

    MuiInputAdornment:{
      styleOverrides:{
          positionEnd:{
            "& button.MuiButtonBase-root.MuiIconButton-root":{
              padding:"0 !important"
            }
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
        "&.Mui-focused":{
          border: `${constants.border.solid} ${Colors.highlightedBorder}`,   
          background:"red !important"                
        },    
      },

      adornedEnd:{
        paddingRight: ".65rem"
      }
    },

    MuiFormLabel:{
      styleOverrides:{
        root:{
          color:Colors.placeholder,
          fontSize:constants.fontSize.sm,
          "&.Mui-focused":{
            fontSize: `${constants.fontSize.md} !important`,
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
              borderBottom: `${constants.border.solid} ${Colors.border}`,
            },
     
            "&:hover":{
              "&:before":{
                borderBottom: `${constants.border.solid} ${Colors.highlightedBorder}`,
              }
            } ,         
     
            "& + .MuiInputBase-root:after":{
                borderBottom: `${constants.border.solid} ${Colors.highlightedBorder}`,
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

          endAdornment:{
            top:"unset !important",
            right:"0 !important"
          }
                
        }
      }
    }
  },
});

export default App



