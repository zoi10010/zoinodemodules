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


## Grid

```jsx
import {
  ZGrid
} from 'react-zoi-common-components'
function GridExample() {
  return (
    <div>
      <div >
          <ZGrid container spacing={2} >
            <ZGrid item xs={12} sm={6} md={4} >
                  <div>
                     Control 1
                  </div>
              </ZGrid>
             <ZGrid item xs={12} sm={6} md={4} >
                  <div>
                    Control 2
                  </div>
            </ZGrid>
          </ZGrid>
      
      </div>
    </div>
  );
}

export default GridExample;
```
`Property`

Name|	Type	|Default	|Description
--- | --- | --- | ---
`children`|	node	||The content of the component.
`classes`|	object||		
`columns`|	Array<number>, number, object	|12|	The number of columns.
`columnSpacing`|	Array<number string>number object string	||Defines the horizontal space between the type item components. It overrides the value of the spacing prop.component	elementType		
`container`|	bool|	false	|If true, the component will have the flex container behavior. You should be wrapping items with a container.
`direction`|	'column-reverse', 'column', 'row-reverse', 'row', Array<'column-reverse', 'column', 'row-reverse', 'row'>, object	'row'||Defines the flex-direction style property. It is applied for all screen sizes.
`item`|	bool|	false	| |
`lg`|	'auto', number, bool|	false	|If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the lg breakpoint and wider screens if not overridden.
`md`|	'auto', number, bool|	false	|If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.
`rowSpacing`|	Array<number, string>, number, object, string|	|	Defines the vertical space between the type item components. It overrides the value of the spacing prop.
`sm`|	'auto', number, bool|	false	|If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the sm breakpoint and wider screens if not overridden.
`spacing`|	Array<number, string>, number, object, string|	0	|Defines the space between the type item components. It can only be used on a type container component.


## SearchTextBox 
```jsx
import {
  ZTextBoxSearch,
  ZGrid
} from 'react-zoi-common-components'
import { useState } from 'react';
function SearchBoxSample() {
const [search,setSearch]=useState('')
const [data,setData]=useState(["Siva","Ram","Dhanush"])
  const handleSearch=(e)=>{
    setSearch(e)
    // here you will get the search value using that need to filter your data
    var fileterData= data.filter(value => value.toLowerCase().includes(e.toLowerCase()) == true)
    setData(fileterData)  
    console.log(data)  
  }
  return (
    <div>
      <div >
          <ZGrid container spacing={2} >
            <ZGrid item xs={12} >
                 <ZTextBoxSearch
                  placeholder={"Search..."} 
                  value={search} 
                  onChange={(value) => handleSearch(value.target.value)}
                 />
              </ZGrid>
          </ZGrid>
      
      </div>
    </div>
  );
}

export default SearchBoxSample;
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`classes` | object | | Override or extend the styles applied to the component.
`value` | number |  | The value of search on change of text box
`placeholder` | string |  | which place holder need to show in text box

## ZAlert 
```jsx
import {
  ZGrid,
  ZAlert
} from 'react-zoi-common-components'
function AlertSample() {

  return (
    <div>
      <div >
          <ZGrid container spacing={2} >
            <ZGrid item xs={12} >
                <ZAlert variant="outlined" severity="error" action={
                  <button  color="inherit" size="small">
                    Close
                  </button>
                }>error alert</ZAlert>
                <ZAlert severity="warning">warning alert </ZAlert>
                <ZAlert severity="info">info alert </ZAlert>
                <ZAlert severity="success">success alert </ZAlert>
              </ZGrid>
          </ZGrid>
      
      </div>
    </div>
  );
}

export default AlertSample;

```
`Property`

Name |	Type |	Default |	Description
--- | --- | --- | ---
`action`|	node||The action to display. It renders after the message, at the end of the alert.
`children`|	node	||The content of the component.
`classes`|	object	||Override or extend the styles applied to the component. See CSS API below for more details.
`closeText`|	string|	'Close'	|Override the default label for the close popup icon button.
For localization purposes, you can use the provided translations.
`color`|	'error'', 'info'', 'success'', 'warning', string	||The color of the component. Unless provided, the value is taken from the severity prop. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.
components|	{ CloseButton?: elementType, CloseIcon?: elementType }|	{}	|The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.
componentsProps|	{ closeButton?: object, closeIcon?: object }|	{}	|The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.
`icon`|	node	||Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the severity prop. Set to false to remove the icon.
`iconMapping`|	{ error?: node, info?: node, success?: node, warning?: node }	||The component maps the severity prop to a range of different icons, for instance success to <SuccessOutlined>. If you wish to change this mapping, you can provide your own. Alternatively, you can use the icon prop to override the icon displayed.
`onClose`|	func||Callback fired when the component requests to be closed. When provided and no action prop is set, a close icon button is displayed that triggers the callback when clicked.

`severity`|	'error'', 'info'', 'success'', 'warning'	'success'	||The severity of the alert. This defines the color and icon used.
slotProps|	{ closeButton?: object, closeIcon?: object }|	{}	|The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the componentsProps prop, which will be deprecated in the future.
slots|	{ closeButton?: elementType, closeIcon?: elementType }|	{}|The components used for each slot inside.This prop is an alias for the components prop, which will be deprecated in the future.
`sx`|	Array<func, object, bool>, func, object||The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
`variant`|	'filled', 'outlined', 'standard', string|	'standard'	|The variant to use.


## License


MIT © [zoi10010](https://github.com/zoi10010)
