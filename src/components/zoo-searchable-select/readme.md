# zoo-searchable-select



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type      | Default         |
| --------------- | --------------- | ----------- | --------- | --------------- |
| `errormsg`      | `errormsg`      |             | `string`  | `''`            |
| `infotext`      | `infotext`      |             | `string`  | `''`            |
| `label`         | `label`         |             | `string`  | `''`            |
| `labelposition` | `labelposition` |             | `string`  | `'top'`         |
| `linkhref`      | `linkhref`      |             | `string`  | `''`            |
| `linktarget`    | `linktarget`    |             | `string`  | `'about:blank'` |
| `linktext`      | `linktext`      |             | `string`  | `''`            |
| `loading`       | `loading`       |             | `boolean` | `false`         |
| `placeholder`   | `placeholder`   |             | `string`  | `''`            |
| `valid`         | `valid`         |             | `boolean` | `true`          |


## Dependencies

### Depends on

- [zoo-select](../zoo-select)
- [zoo-preloader](../zoo-preloader)
- [zoo-input](../zoo-input)

### Graph
```mermaid
graph TD;
  zoo-searchable-select --> zoo-select
  zoo-searchable-select --> zoo-preloader
  zoo-searchable-select --> zoo-input
  zoo-select --> zoo-link
  zoo-select --> zoo-input-label
  zoo-select --> zoo-preloader
  zoo-select --> zoo-input-info
  zoo-input --> zoo-link
  zoo-input --> zoo-input-label
  zoo-input --> zoo-input-info
  style zoo-searchable-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
