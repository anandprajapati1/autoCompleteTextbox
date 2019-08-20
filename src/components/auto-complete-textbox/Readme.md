# auto-complete-textbox
It is a web component which gives you suggestion as soon as you start typing in. Default suggestion items are `["lorem", "ipsum", "dolor", "sit", "amet"]`

## How to use
To use this component in your project, you have to simply follow these **steps**:
- Run `npm install auto-complete-textbox`
- Put a script tag similar to this `<script src='node_modules/auto-complete-textbox/autocompletetextbox.js'></script>` in the head of your **index.html**
- Then you can use the element anywhere in your html, template, JSX file etc using following custom tag:
 ```html
 <body>
    <auto-complete-textbox></auto-complete-textbox>
 </body>
 ````



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute  | Description                                                              | Type       | Default |
| ------------ | ---------- | ------------------------------------------------------------------------ | ---------- | ------- |
| `data`       | --         | The filterd data as per searched query                                   | `string[]` | `[]`    |
| `isDisabled` | `disabled` | This property can be used by host element to make functionality disabled | `boolean`  | `false` |


## Methods

### `initializeData(d: string[]) => Promise<void>`

This method can be used to change/initialize autocomplete suggestions list.
Note - This will not append but reinitialize the suggestion data, so previous suggestion data will be overwritten.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
