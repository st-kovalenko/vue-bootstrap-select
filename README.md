# Vue Bootstrap Select Dropdown

A simple **Vue.js 3** dropdown-select component project with an integrated search bar, based on Bootstrap CSS.
This project provides a user-friendly dropdown with support for arrays, objects and dynamic configurations.

## Overview

The **Vue Bootstrap Select Dropdown** is a component-based solution inspired by the original [bootstrap select](https://github.com/snapappointments/bootstrap-select/).
This modern Vue.js version offers a lightweight, flexible, and extendable dropdown component.

This project is a fork from the original Vue.js 2 [Sandalf/vue-bootstrap-select](https://github.com/Sandalf/vue-bootstrap-select) project which is no longer maintained.

> [!IMPORTANT]
> This component is no longer actively developed or maintained.
> However, you are welcome to create a merge request or fork this project to customize it as needed.

### ✨ Features:

- **Searchable:** Includes a search field for easier option filtering.
- **Highly customizable:** Supports various data types (arrays or objects of strings).
- **Reactive:** Works seamlessly with `v-model` directives for data binding.
- **Accessibility:** Supports disabled options and user-friendly selection.
- **Easy integration:** Built on Vue 3 and compatible with Bootstrap CSS.

---

## Requirements

To use this component, the following requirements must be met:

- **Vue.js 3**
- **Node.js 20.15.1** for installation
- **Bootstrap CSS 4 or 5** for styling

---

## Installation

Install the package via **npm**:

```bash
npm install @stanislav-ernst/vue-bootstrap-select --save
```

**Including styles:**
In addition to JavaScript, you'll need to import the styles:

```javascript
import '@stanislav-ernst/vue-bootstrap-select/dist/style.css';
```

---

## Quick Usage

### Example with an Array of Objects

Integrate the component into your Vue app:

```javascript
import VueBootstrapSelect from '@stanislav-ernst/vue-bootstrap-select';

export default {
  name: 'App',
  components: {
    VueBootstrapSelect,
  },
  data() {
    return {
      options: [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
      ],
      selectedValue: null,
    };
  },
};
```

Include the component in your template:

```html
<VueBootstrapSelect
  :options="options"
  v-model="selectedValue"
/>
```

---

## Configuration & Properties

### Available Properties

| Property                 | Description                                                                                                                  | Type                   | Default Value          | Acceptable Values  |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------------|--------------------|
| `options`                | List of dropdown values.                                                                                                     | Array                  | `[]`                   | Strings or objects |
| `searchable`             | Enables search mode.                                                                                                         | Boolean                | `false`                | `true`, `false`    |
| `showDefaultOption`      | Sets the select title is set as an option.                                                                                   | Boolean                | `false`                | `true`, `false`    |
| `disabled`               | Disables the dropdown.                                                                                                       | Boolean                | `false`                | `true`, `false`    |
| `disabledProp`           | Defines a property to disable specific options. If an option has this prop set to a truthy value it will disable the option. | String                 | `'disabled'`           | -                  |
| `labelNotFound`          | Text displayed when no option is found in the search results.                                                                | String                 | `'No results matched'` | -                  |
| `labelSearchPlaceholder` | Placeholder text for the search field.                                                                                       | String                 | `'Search'`             | -                  |
| `textProp`               | Attribute of an object used as the displayed text value (for object arrays).                                                 | String                 | `'text'`               | -                  |
| `valueProp`              | Attribute of an object used as the corresponding value (for object arrays).                                                  | String                 | `'value'`              | -                  |
| `labelTitle`             | Text displayed when no option is selected and `showDefaultOption` is not set.                                                | String                 | `'Nothing selected'`   | -                  |
| `descriptionProp`        | Defines the keys used to show additional description for options.                                                            | Array                  | `["description"]`      | -                  |
| `modelValue`             | The current value of the dropdown, bound with v-model, and synchronized with the selected option.                            | Object, String, Number | `null`                 | -                  |

---

### Examples

#### Using an Array of Strings

```html
<VueBootstrapSelect :options="['Option A', 'Option B']" />
```

#### Using an Array of Objects with Custom Values

```html
<VueBootstrapSelect :options="[{ value: 1, text: 'Option A' }, { value: 2, text: 'Option B' }]" />
```

---

## Development

### Run Dev Server:

To run the project locally:

```bash
npm run serve
```

### Local Development Environment:

This project has been tested with the following versions:

- Node.js: **20.x**
- Vue.js: **3.x**
- NPM: **10.x**

---

## Component Preview

### Example Component Implementations:

1. **Array of Strings:** Create simple dropdown menus with string-based values.
2. **Array of Objects:** Enable object-based selections with custom labels and values.

#### Code Examples:

```html
<VueBootstrapSelect
  :options="['Apple', 'Banana', 'Grapes']"
  v-model="fruit"
  :searchable="true"
/>

<VueBootstrapSelect
  :options="[{ value: 1, text: 'German' }, { value: 2, text: 'English' }]"
  v-model="language"
  :searchable="true"
  :disabled="false"
/>
```

---

## Compatibility and Styles

This component uses SCSS for styles. To ensure proper appearance, include the required Bootstrap CSS styles:

```bash
npm install bootstrap
```

Import Bootstrap in your project:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## Contributing

We welcome contributions! Please open pull requests or issues if you find bugs or have improvement suggestions.

1. Fork the repository.
2. Create a branch for your changes.
3. Test changes thoroughly in a development environment.
4. Open a pull request.

---

### License

This project is licensed under the [MIT License](LICENSE).
