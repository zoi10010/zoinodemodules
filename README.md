# zoinodemodules

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/zoinodemodules.svg)](https://www.npmjs.com/package/zoinodemodules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save zoinodemodules
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'zoinodemodules'
import 'zoinodemodules/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## TextField

```jsx
import React, { Component } from 'react'

import { ZTextField } from 'zoinodemodules'

class TextField extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name:""
    }
  }
  render() {
    return (
      <div>
        <ZTextField
          label="name"
          value={name}
          onChange={(e)=>this.setState({name:e.target.value})}
          isLoading={false}
          variant="filled"
          size="small"
        />
      </div>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`value` | String | | Value represented by this `Input` if it is controlled. 
`isLoading` | bool | | If `true`, Skeleton component load. 
`defaultValue` | String | | Default value represented by this `Input` if it is uncontrolled.
`disabled` | bool | false| If `true`, the component is disabled.
`error` | bool |false | If  `true`, the label is displayed in an error state.
`helperText` | String | | If `true`, The error text content.
`InputProps` | object | | Props applied to the Input element. It will be a FilledInput, OutlinedInput or Input component depending on the variant prop value.
`variant` | 'filled'| 'outlined'| 'standard' | outlined| If `true`, The variant to use.
## License

## Button

```jsx
import React, { Component } from 'react'

import { ZButton } from 'zoinodemodules'

class Button extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
        <ZButton color="primary" name="Save"></ZButton>
        <ZButton variant="contained" color="success" name="Success" isLoading="true" disabled="true">
        </ZButton>
        <ZButton variant="outlined"color="Secondary" name="Error">
        </ZButton>
      </div>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`name` | String | | Display the button name. 
`isLoading` | bool |false | If `true`, circular progress load. 
`disabled` | bool | false| If `true`, the component is disabled.
`endIcon` | node | | Element placed after the children.
`startIcon` | node | | Element placed before the children.
`color` | 'inherit' 'primary' 'secondary' 'success' 'error' 'info' 'warning' string | primary| Element placed before the children.
`variant` | 'contained' 'outlined''text' string | text| The variant to use..
## License


MIT © [zoi10010](https://github.com/zoi10010)
