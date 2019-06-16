# zoo-select



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
| `showicons`     | `showicons`     |             | `boolean` | `true`          |
| `valid`         | `valid`         |             | `boolean` | `true`          |


## Dependencies

### Used by

 - [zoo-searchable-select](..\zoo-searchable-select)

### Depends on

- [zoo-link](..\zoo-link)
- [zoo-input-label](..\shared\zoo-input-label)
- [zoo-preloader](..\zoo-preloader)
- [zoo-input-info](..\shared\zoo-input-info)

### Graph
```mermaid
graph TD;
  zoo-select --> zoo-link
  zoo-select --> zoo-input-label
  zoo-select --> zoo-preloader
  zoo-select --> zoo-input-info
  zoo-searchable-select --> zoo-select
  style zoo-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
