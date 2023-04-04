import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import Colors from '../..//utils/constants/Colors';
import Constants from '../..//utils/constants/ConstantCss';
import constants from '../..//utils/constants/ConstantCss';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: "1rem",
  height: "1rem",
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? `${Colors.Cello}` : `${Colors.aliceBlue}`,
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? `${Colors.darkBlue}` : `${Colors.fadedBlue}`,
  },
  'input:disabled ~ &': {
    boxShadow: Constants.boxShadow.none,
    background:
      theme.palette.mode === 'dark' ? `${Colors.fadedCello}` : `${Colors.fadedpattensBlue}`,
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: Colors.primary,
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: Constants.display.block,
    width: "1rem",
    height: "1rem",
    backgroundImage: `radial-gradient(${Colors.white},${Colors.white} 28%,${Colors.transparent} 32%)`,
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: Colors.primary,
  },
});


export default function ZRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

