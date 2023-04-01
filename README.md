# react-zoi-common-components

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-zoi-common-components.svg)](https://www.npmjs.com/package/react-zoi-common-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-zoi-common-components
```

<!-- TOC -->

- [Zoi Components Navigation](#react-zoi-common-components -navigation)
<!--     - [TextField](#TextField) -->
    - [TextField](#TextField)
    - [Button](#Button)
    - [Typography](#Typography)
    - [Common Dialog](#CommonDialog)
    - [FormControlLabel](#FormControlLabel)
    - [CircularProgress](#CircularProgress)
    - [Box](#Box) 
    - [Bage](#Bage)   
    - [CircularProgress](#CircularProgress)   
    - [Grid](#Grid)  
    - [SearchTextBox](#SearchTextBox)   
    - [Alert](#ZAlert) 
    - [Dialog](#Dialog) 
    - [Collapse](#Collapse) 
    - [Chip](#ZChip) 
    - [CheckBox](#CheckBox) 
    - [Skeleton](#Skeleton) 

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


## BOX 
```jsx
import React, { Component } from 'react'

import { ZBox } from 'react-zoi-common-components'

class Box  extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZBox
          sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          },
        }}
       />
       <ZBox component="span" sx={{ p: 2, border: '1px dashed grey' }}>
       <ZBox sx={{ border: '1px dashed grey' }}>
      </div>
    )
  }
}
```
`Property`
Prop Name | Type | Default | Description
--- | --- | --- | ---
`component`| elementType| |The component used for the root node. Either a string to use a HTML element or a component.
`sx` | 	Array<func, object, bool>, func, object | | The system prop that allows defining system overrides as well as additional CSS styles.

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
`closeText`|	string|	'Close'	|Override the default label for the close popup icon button.For localization purposes, you can use the provided translations.
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


## Bage
```jsx
import React, { Component } from 'react'

import { ZBage } from 'react-zoi-common-components'

class Bage  extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZBage badgeContent={4} color="primary"></ZBage>
       <ZBage color="secondary" badgeContent={0}></ZBage>
       <ZBage color="secondary" overlap="circular" badgeContent=" "></ZBage>
    )
  }
}
```
`Property`

Name |	Type |	Default |	Description
--- | --- | --- | ---
`anchorOrigin`|{ horizontal: 'left','right', vertical: 'bottom', 'top' }|{ vertical: 'top', horizontal: 'right', }|The anchor of the badge.
`badgeContent`|node| |The content rendered within the badge.
`children`|node	| |The badge will be added relative to this node.
`classes`|object| |Override or extend the styles applied to the component. 
`color`|'default', 'primary','secondary','error','info','success','warning',string|'default'|The color of the component. It supports both default and custom theme colors
`component`| elementType| |The component used for the root node. Either a string to use a HTML element or a component.
`components`|	{ Badge?: elementType, Root?: elementType }|{}|The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.
`componentsProps`|{ badge?: func,object, root?: func, object }|{}|The extra props for the slot components.You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.
`invisible`|bool|false|	If true, the badge is invisible.
`max`|number|	99|Max count to show.
`overlap`|'circular','rectangular'|'rectangular'|Wrapped shape the badge should overlap.
`showZero`|bool|false|Controls whether the badge is hidden when badgeContent is zero.
`slotProps`|{ badge?: func,object, root?: func,object }|{}|	The props used for each slot inside the Badge.
`slots`|	{ badge?: elementType, root?: elementType }|{}|	The components used for each slot inside the Badge. Either a string to use a HTML element or a component.
`sx`|	Array<func, object, bool>, func, object||The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
`variant`|	'dot', 'standard', 'string'|	'standard'	|The variant to use.

## Collapse 
```jsx
import React, { Component } from 'react'

import { ZCollapse, ZCardContent, ZContainer } from 'react-zoi-common-components'

class Collapse  extends Component {
  constructor(props) {
    super(props)
    this.state={
    open:false
  }
  }
  render() {
    return (
      <div>
        <ZCollapse in={this.state.open} timeout="auto" unmountOnExit>
          <ZCardContent>
           <ZContainer sx={{ height: 100, lineHeight: 2}}>
            Hello React
           </ZContainer>
          </ZCardContent>
        </ZCollapse>
    )
  }
}
```
`Property`

Name |	Type |	Default |	Description
--- | --- | --- | ---
`addEndListener`| func | | Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Note: Timeouts are still used as a fallback if provided.
`children`|node| | The content node to be collapsed.
`classes`| object | | Override or extend the styles applied to the component.
`collapsedSize`| number, string | '0px' | The width (horizontal) or height (vertical) of the container when collapsed.
`component`| element type | | The component used for the root node. Either a string to use a HTML element or a component.
`easing`| 	{ enter?: string, exit?: string }, string | | The transition timing function. You may specify a single easing or a object containing enter and exit values.
`in`| bool | | If `true`, the component will transition in.
`orientation`| 'horizontal', 'vertical' | 'vertical' | The transition orientation.
`sx`| Array<func, object, bool>, func, object | | The system prop that allows defining system overrides as well as additional CSS styles.
`timeout	`| 	'auto', number, { appear?: number, enter?: number, exit?: number } | duration.standard | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object. Set to 'auto' to automatically calculate transition time based on height.

## Dialog  
```jsx
import React, { Component } from 'react'

import { ZDialog , ZDialogTitle, ZTypography, ZDialogContent, ZDialogActions, ZButton  } from 'react-zoi-common-components'

class Dialog  extends Component {
  constructor(props) {
    super(props)
    this.state={
      open:true
    }
  }
  render() {
    return (
      <div>
        <ZDialog  open={this.state.open}>
          <ZDialogTitle>
            {" "}
            <ZTypography variant="h4">Lorem ipsum dolor sit amet consectetuer</ZTypography>
          </ZDialogTitle>
          <ZDialogContent>
            <ZTypography variant="h6">
              Are you sure you want to delete this user?
            </ZTypography>
            <ZTypography variant="subtitle2">
              You can't undo this operation
            </ZTypography>
          </ZDialogContent>
          <ZDialogActions>
            <ZButton variant="contained">No</ZButton>
            <ZButton variant="contained" color="error">
              Yes
            </ZButton>
          </ZDialogActions>
        </ZDialog >
    )
  }
}
```
`Property`

Name |	Type |	Default |	Description
--- | --- | --- | ---
`open*`| bool | | If `true`, the component is shown.
`aria-describedby`| string | | The id(s) of the element(s) that describe the dialog.
`aria-labelledby`| string | | The id(s) of the element(s) that label the dialog.
`BackdropComponent`| elementType | styled(Backdrop, { name: 'MuiModal', slot: 'Backdrop', verridesResolver: (props, styles) => { return styles.backdrop; }, })({ zIndex: -1, }) | A backdrop component. This prop enables custom backdrop rendering.
`children`| node | | Dialog children, usually the included sub-components.
`classes`| object | | Override or extend the styles applied to the component.
`disableEscapeKeyDown`| bool | false | If `true`, hitting escape will not fire the `onClose` callback.
`fullScreen`| bool | false | If `true`, the dialog is full-screen.
`fullWidth`| bool | false | If `true`, the dialog stretches to `maxWidth`. Notice that the dialog width grow is limited by the default margin.
`maxWidth`| 'xs', 'sm', 'md', 'lg', 'xl', false, string | 'sm' | Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to `false` to disable `maxWidth`.
`onBackdropClick	`| func | | Callback fired when the backdrop is clicked.
`onClose`| func | | Callback fired when the component requests to be closed. Signature:`function(event: object, reason: string) => void`, event: The event source of the callback. reason: Can be: "escapeKeyDown", "backdropClick".
`PaperComponent`| elementType | Paper | The component used to render the body of the dialog.
`PaperProps`| object | {} | Props applied to the Paper element.
`scroll`| 'body', 'paper' | 'paper' | Determine the container for scrolling the dialog.
`sx`| Array<func, object, bool>, func, objectThe system prop that allows defining system overrides as well as additional CSS styles.
`TransitionComponent`| elementType | Fade | The component used for the transition.
`transitionDuration`| number, { appear?: number, enter?: number, exit?: number } | { enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen, } |The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
`TransitionProps`| object | | Props applied to the transition element. By default, the element is based on this Transition component.



## No Data

 ```jsx
 import React, { Component } from 'react'
 import { ZNoData } from 'zoi-node-modules' 

 class NoData extends Component{
   constructor(props){
    super(props)
    this.state = {
       nodata:""
    }
   }

   render() {
    return (
       <div>
          <ZNoData
             name="nodata"
             value={this.state.nodata}
          />   
       </div>
    )
   }
 }
 ```
 `Property`

 Prop Name | Type | Default | Decription
 --- | --- | --- | ---
 `name` | string | | The name of the nodata.
 `value` | any | | The message. when data is not available

## Paper

```jsx
import React, { Component } from 'react'

import { ZPaper } from 'zoi-node-modules'

class Paper extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <div>
         <ZPaper elevation={0} />
         <ZPaper elevation={3} variant="outlined" square/>
      </div>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`elevation` | integer | 1 | Shadow depth, It accepts values between 0 and 24 inclusive.
`variant` | 'elevation' 'outlined' 'string' | elevation | The variant to use.
`square` | bool | false | If true, rounded corners are disabled.
 

## Popover

```jsx
import React, { Component } from 'react'
import { ZPopover } from 'zoi-node-modules' 

class Popover extends Component{
  constructor(props){
    super(props)
    this.state = {
       anchorE1: event.currentTarget  
    }
  }
  
  render(){
    const open = Boolean(anchorE1);
    return (
       <div>
          <ZPopover
             id={"id"}
             open={"open"}
             anchorE1={this.state.anchorE1}
             onClose={handleclose}
             anchorOrigin={{
                vertical:"bottom",
                horizontal:"left"
             }}
             transformOrigin={{
                vertical:"bottom",
                horizontal:"left"
             }}
          />
       </div>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`open` | bool | | If true, The component is shown.
`anchorE1` | 'HTML element' 'func' | | An HTML element or a function that returns one.It's used to set the position of the popover.
`anchorOrigin` | { horizontal: 'center' 'left' 'right' 'number', vertical: 'bottom' 'center' 'top' 'number'} | { vertical: 'top', horizontal: 'left'} | This is the point on the anchor where the popover's anchorE1 will attach to.
`transformOrigin` | { horizontal: 'center' 'left' 'right' 'number', vertical: 'bottom' 'center' 'top' 'number'} | { vertical: 'top', horizontal: 'left'} | This is the point on the popover which will attach to the anchor's origin.
`onClose` | func | | Callback fired when the component requests to be closed.

## Radio Group

```jsx
import React, { Component } from 'react'
import { ZRadioGroup } from 'zoi-node-modules' 

class RadioGroup extends Component{
  constructor(props){
    super(props)
    this.state = {
       value:""
    }
  }
  render() {
    return (
      <div>
        <ZRadioGroup
          name="use-radio-group" 
          defaultValue="first"
          aria-labelledby="demo-controlled-radio-buttons-group"
          value={this.state.value}
        >  
          <FormControlLabel value="first" label="first" control={<Radio />} />
          <FormControlLabel value="second" label="second" control={<Radio />} />
        </ZRadioGroup>
      </div>
    )
  }
}
```
`Property`

Prop Name | Type | Default | Description
--- | --- | --- | ---
`name` | string | | The name used to reference the value of the control.
`defaultValue` | any | | The default value. Use when the component is not controlled.
`value` | any | | Value of the selected radio button.


## Radio 

 ```jsx
 import React, { Component } from 'react'
 import { ZRadioGroup } from 'zoi-node-modules' 

 class Radio extends Component{
  constructor(props){
    super(props)
    this.state = {
       name:""
       disable:false
    }
  }

  render() {
    return (
       <div>
         <ZRadio
            checked={selectedValue === 'a'}
            onChange={(e)=>this.setState({name:e.target.value})}
            id="use-radio-button"
            value="a"
            name="radio-buttons"
            size="small"
            color="default"
            inputProps={{ 'aria-label': 'A' }}
            disabled={this.state.disable}
         />
       </div>
    )
  }
 }
 ```
 `Property`

 Prop Name | Type | Default | Description
 --- | --- | --- | ---
`checked` | bool | | If true, The component is checked.
`onChange` | func | | Callback fired when the state is changed.
`id` | string | | The id of the input element.
`value` | any | | The value of the component.
`name` | string | | Name attribute of the input element.
`size` | 'medium' 'small' string | medium | The size of the component.
`color` | 'default' 'primary' 'secondary' 'error' 'info' 'success' 'warning' string | primary | The color of the component.
`inputProps` | object | | Attributes applied to the input element.
`disabled` | bool | | If true, The component is disabled.

## Chip
```jsx
import React, { Component } from 'react'

import { ZChip } from 'react-zoi-common-components'

class Chip  extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZChip label="Chip Filled" />
       <ZChip label="Custom delete icon"
             onClick={handleClick}
             onDelete={handleDelete}
             deleteIcon={<DeleteIcon />}
             variant="outlined"
       />
      <ZChip label="success" color="success" />
       
    )
  }
}
```
`Property`

Name |	Type |	Default |	Description
--- | --- | --- | ---
`avatar	`|element| |	The Avatar element to display.
`classes`|object| |Override or extend the styles applied to the component. 
`clickable`|bool| |If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. If false, the chip will not appear clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable. Note: this controls the UI and does not affect the onClick event.
`color`|'default', 'primary','secondary','error','info','success','warning',string|'default'|The color of the component. It supports both default and custom theme colors
`component`|elementType| |The component used for the root node. Either a string to use a HTML element or a component.en the component is unchecked.
`deleteIcon`|element| |	If true, the component is disabled.
`icon`|element| |	Icon element.
`label`|node| |The content of the component.
`onDelete`|func| |Callback fired when the delete icon is clicked. If set, the delete icon will be shown.
`size`|	'medium','small',string|'medium'|	The size of the component. small is equivalent to the dense checkbox styling.
`sx`|	Array<func, object, bool>, func, object||The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
`variant`|'filled','outlined',string| filled|The variant to use.

## CheckBox
```jsx
import React, { Component } from 'react'

import { ZCheckBox } from 'react-zoi-common-components'

class CheckBox  extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZCheckBox {...label} defaultChecked />
       <ZCheckBox {...label} disabled />
       <ZCheckBox {...label} defaultChecked size="small" />
       <ZCheckBox {...label} defaultChecked color="success" />
    )
  }
}
```
`Property`

Name |	Type |	Default |	Description
--- | --- | --- | ---
`checked`|bool| |	If true, the component is checked.
`checkedIcon`|node|	<CheckBoxIcon /> |The icon to display when the component is checked.
`classes`|object| |Override or extend the styles applied to the component. 
`color`|'default', 'primary','secondary','error','info','success','warning',string|'default'|The color of the component. It supports both default and custom theme colors
`defaultChecked`| bool| |	The default checked state. Use when the component is not controlled.
`disabled`|bool|false|If true, the component is disabled.
`icon`|node|	<CheckBoxOutlineBlankIcon />|The icon to display when the component is unchecked.
`id`|string| |	The id of the input element.
`inputProps`|object| |	Attributes applied to the input element.
`inputRef`|ref| |Pass a ref to the input element.
`onChange`|func| |	Callback fired when the state is changed.Signature:function(event: React.ChangeEvent<HTMLInputElement>) => void event: The event source of the callback. You can pull out the new checked state by accessing event.target.checked (boolean).
`required`|bool|false|If true, the input element is required.
`size`|	'medium','small',string|'medium'|	The size of the component. small is equivalent to the dense checkbox styling.
`sx`|	Array<func, object, bool>, func, object||The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
`value`|any| |The value of the component. The DOM API casts this to a string. The browser uses "on" as the default value.

## Skeleton 
```jsx
import React, { Component } from 'react'

import { ZSkeleton } from 'react-zoi-common-components'

class Skeleton   extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
       <ZSkeleton variant="text" sx={{ fontSize: '1rem' }} />
       <ZSkeleton variant="circular" width={40} height={40} />
       <ZSkeleton variant="rounded" width={210} height={60} />
       <ZSkeleton animation="wave" />
    )
  }
}
```
`Property`

Name |	Type |	Default |	Description
--- | --- | --- | ---
`animation`|'pulse','wave',false|pulse|	The animation. If false the animation effect is disabled.
`classes`|object| |Override or extend the styles applied to the component. 
`component`|elementType| |The component used for the root node. Either a string to use a HTML element or a component.
`height`| number,string| |Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.
`width`|number,string| |Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.
`sx`|	Array<func, object, bool>, func, object||The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
`variant`|'circular','rectangular','rounded','text',string|text|The type of content that will be rendered.
## ZAlert 
```jsx
import {
  ZAppBar,
} from 'react-zoi-common-components'
import Toolbar from '@mui/material/Toolbar';

import { useState } from 'react';
function AppBarExample () {

  return (
    <div>
      <div >
          <ZAppBar position="static" color="primary" enableColorOnDark>
              <Toolbar variant="dense">
                    icon
              </Toolbar>
          </ZAppBar>
      </div>
    </div>
  );
}

export default AppBarExample;
```
`Property`

Name|	Type|	Default|	Description
--- | --- | --- | ---
`children`|	node||The content of the component.
`classes`|	object	||Override or extend the styles applied to the component. See CSS API below for more details.
`color`|	'default', 'inherit', 'primary', 'secondary', 'transparent', string|	'primary'	|The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.enableColorOnDark	bool	false	.If true, the color prop is applied in dark mode.
`position`|	'absolute', 'fixed', 'relative'| 'static', 'sticky'|	'fixed'	|The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable.
`sx`	|Array<func, object , bool> , func, object	||The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.

## License


MIT © [zoi10010](https://github.com/zoi10010)
