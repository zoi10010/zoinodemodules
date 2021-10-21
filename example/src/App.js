import React from 'react'

import { ZTextField, ZGrid, ZTextBoxSearch, ZAppBar } from 'zoinodemodules'
import 'zoinodemodules/dist/index.css'

const App = () => {
  return <div>
    <ZAppBar position="static">
      <p>Zoi Fintech</p>
    </ZAppBar>
    <ZGrid container >
      <ZGrid item md={3}>
        <ZTextField label="name" />
      </ZGrid>
      <ZGrid item md={3}>
        <ZTextBoxSearch placeholder="Search" />
      </ZGrid>
    </ZGrid>
  </div>
}

export default App
