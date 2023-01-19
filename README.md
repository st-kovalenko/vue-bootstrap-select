
# Vue.js dropdown with search box
A Vue.js 3 version of [bootstrap select](https://github.com/snapappointments/bootstrap-select/).

## About
A component that allows you to search select options.

This project is a fork from the original [Sandalf/vue-bootstrap-select](https://github.com/Sandalf/vue-bootstrap-select) project which is no longer maintained.

## Requirements

- Vue.js 3
- Bootstrap CSS

## Install

```shell
npm install st-kovalenko/vue-bootstrap-select --save
```

## Usage

```js
import VueBootstrapSelect from 'vue-bootstrap-select'
import 'vue-bootstrap-select/dist/style.css'

export default {
  name: 'app',
  components: {
    VueBootstrapSelect
  },
  data() {
    return {
      selectedValue: null
    };
  }
}
```

```html
<template>
  <div id="app">
    <VueBootstrapSelect :options="[{value: 1, text: 'Item 1'}, {value: 2, text: 'Item 2'}]" v-model="selectedValue" />
  </div>
</template>
```

### Passing options

The `options` property accepts arrays of strings.

```html
<VueBootstrapSelect :options="['Item 1', 'Item 2']" />
```
And arrays of objects

```html
<VueBootstrapSelect :options="[{value: 1, text: 'Item 1'}, {value: 2, text: 'Item 2'}]" />
```

## Props

| parameter      | description                                                                                                                                    | type                                   | default      | acceptable value |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------ | ---------------- |
| disabled | disables select | Boolean | false   | |
| disabledProp | allows to disable specific options. If an option has this prop set to a truthy value it will disable the option. | String | disabled |  |
| labelNotFound | text displayed when no option is found in the search results | String | No results matched ||
| labelSearchPlaceholder | placeholder text for search input | String | Search | |
| options | list of options | Array | [] | |
| searchable | display search input | Boolean | false |  |
| showDefaultOption | sets the select title is set as an option | Boolean | false | |
| textProp | the option's prop that is displayed as the option's text | String | text | |
| valueProp | the option's prop that is used to find the selected value | String | value |

## Testing
Tested with the following configuration:

- Node.js:
- NPM:
- Vue.js: 

```shell
npm run serve
```