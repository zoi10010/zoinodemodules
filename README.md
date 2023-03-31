# react-zoi-common-components

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-zoi-common-components.svg)](https://www.npmjs.com/package/react-zoi-common-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-zoi-common-components
```

<!-- TOC -->

- [Zoi Components Navigation](#react-zoi-common-components -navigation)
    - [TextField](#TextField)
    - [Button](#Button)
    - [Typography](#Typography)
    - [Common Dialog](#CommonDialog)   
    - [FormControlLabel](#FormControlLabel)
    - [CircularProgress](#CircularProgress)   

<!-- /TOC -->


## TextField

```jsx
import React, { Component } from 'react'

import { ZTextField } from 'react-zoi-common-components'

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




## Button

```jsx
import React, { Component } from 'react'

import { ZButton } from 'react-zoi-common-components'

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



## Typography

```jsx
import React, { Component } from 'react'

import { ZTypography } from 'react-zoi-common-components'

class Typography extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZTypography isLoading={true}>Hello</ZTypography>
        <ZTypography variant="h1" component="h2">h1. Heading</ZTypography>  
      </div>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`align` | 'center' 'inherit' 'justify' 'left' 'right' |inherit |Set the text-align on the component.. 
`isLoading` | bool |false | If `true`, circular progress load. 
`noWrap` | bool | false| If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.


## Common Dialog

```jsx
import React, { Component } from 'react'

import { ZCommonDialog } from 'react-zoi-common-components'

export default class ZCommonDialogs extends Component {
  constructor(props) {
    super(props)
     this.state = {
        isShowModel:true
    }
  }
   cancelButton = () => {
    alert("cancel")

    this.setState({
        isShowModel:false
    })
  }

   okButton = () => {
    alert("ok")
  }
  render() {
    return (
        
       <ZCommonDialog open={this.state.isShowModel} close={() => this.setState({isShowModel:false})} head="Delete" actionButton={[{ name: 'No', action: this.cancelButton, variant: "outlined", color: "primary" }, { name: 'Yes', action: this.okButton, variant: "contained", color: "primary" }]}>
        <div>This is common dialog</div>
      </ZCommonDialog>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`open` | bool |false |	If true, the component is shown. 
`children` | node | |Dialog children, usually the included sub-components. 
`close` | func | | this is close button functionality,
`actionButton` | array | | pass button property and action button details like array,


## FormControlLabel
```jsx
import React, { Component } from 'react'

import { ZFormControlLabel ,ZRadio  } from 'react-zoi-common-components'

class FormControlLabel  extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZFormControlLabel label="YES" value="yes" control={<ZRadio />} />
       <ZFormControlLabel label="NO" value="no" control={<ZRadio />} disabled />
      </div>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`control` | element | | A control element. For instance, it can be a Radio, a Switch or a Checkbox.
`checked` | bool | | If `true`, the component appears selected.
`classes` | object | | Override or extend the styles applied to the component.
`componentsProps` | { typography?: object } | {} | The props used for each slot inside.
`disabled` | bool | | If `true`, the control is disabled.
`disableTypography` | bool | | If `true`, the label is rendered as it is passed without an additional typography node.
`inputRef` | ref | | Pass a ref to the `input` element.
`label` | node | | A text or an element to be used in an enclosing label element.
`labelPlacement` | 'bottom','end','start','top' | 'end' | The position of the label.
`onChange` | func | | Callback fired when the state is changed. Signature:function(event: React.SyntheticEvent) => void. event: The event source of the callback. You can pull out the new checked state by accessing event.target.checked (boolean).
`slotProps` | { typography?: object } | {} | The props used for each slot inside.
`sx` | Array<func, object, bool>, func, object | | The system prop that allows defining system overrides as well as additional CSS styles.
`value` | any | | The value of the component.

## CircularProgress 
```jsx
import React, { Component } from 'react'

import { ZCircularProgress } from 'react-zoi-common-components'

class CircularProgress  extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZCircularProgress  />
       <ZCircularProgress color="secondary"  />
       <ZCircularProgress variant="determinate" value={75} />
      </div>
    )
  }
}
```
`Property`
Prop Name | Type | Default | Description
--- | --- | --- | ---
`classes` | object | | Override or extend the styles applied to the component.
`color` | 'inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning', string | 'primary' | The color of the component. It supports both default and custom theme colors.
`disableShrink` | bool | false | If `true`, the shrink animation is disabled. This only works if variant is `indeterminate`
`size` | number, string | 40 | The size of the component. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g '3rem'.
`sx` | 	Array<func, object, bool>, func, object | | The system prop that allows defining system overrides as well as additional CSS styles.
`thickness` | number | 3.6 | The thickness of the circle.
`value` | number | 0 | The value of the progress indicator for the determinate variant. Value between 0 and 100.
`variant` | 'determinate', 'indeterminate' | 'indeterminate' | The variant to use. Use indeterminate when there is no progress value.

## License


MIT © [zoi10010](https://github.com/zoi10010)
