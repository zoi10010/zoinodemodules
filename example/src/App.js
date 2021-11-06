import React from 'react'

import { ZTextField, ZGrid, ZTextBoxSearch, ZAppBar, ZButton, ZTypography, ZCommonDialog } from 'zoinodemodules'
import 'zoinodemodules/dist/index.css'


const App = () => {

  const cancelButton = () => {
    alert("cancel")
  }

  const okButton = () => {
    alert("ok")
  }

  return <div>
    <ZAppBar position="static">
      <p>Zoi Fintech</p>
    </ZAppBar>
    <ZGrid container >
      <ZGrid item md={3}>
        <ZTypography isLoading={true}>ssssss</ZTypography>
        <ZTypography variant="h1" component="h2">h1. Heading</ZTypography>
      </ZGrid>
      <ZGrid item md={3}>
        <ZButton color="primary" name="Save"></ZButton>
        <ZButton variant="contained" color="success" name="Success" isLoading="true" disabled="true">
        </ZButton>
        <ZButton variant="outlined" color="Secondary" name="Error">
        </ZButton>
      </ZGrid>
      <ZCommonDialog open={true} close={() => alert("close")} head="User Details" actionButton={[{ name: 'Cancel', action: cancelButton, variant: "outlined", color: "primary" }, { name: 'ok', action: okButton, variant: "contained", color: "primary" }]}>
        <div>This is common dialog</div>
      </ZCommonDialog>
    </ZGrid>
  </div>
}

export default App



