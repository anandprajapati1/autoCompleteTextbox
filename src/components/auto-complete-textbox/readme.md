# auto-complete-textbox
Can be used by following these simple steps:
- Run `npm install auto-complete-textbox --save`
- Put a script tag similar to this `<script src='node_modules/auto-complete-textbox/dist/autocompletetextbox.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc using `<auto-complete-textbox></auto-complete-textbox>` tag.



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute  | Description                                                              | Type       | Default |
| ------------ | ---------- | ------------------------------------------------------------------------ | ---------- | ------- |
| `data`       | --         | The filterd data as per searched query                                   | `string[]` | `[]`    |
| `isDisabled` | `disabled` | This property can be used by host element to make functionality disabled | `boolean`  | `false` |


## Methods

### `initializeData(d: string[]) => Promise<void>`

Use this method to change/initialize autocomplete suggestions list.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
