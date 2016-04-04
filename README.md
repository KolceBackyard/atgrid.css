# atGrid.css - CSS Grid System with attribute selectors

> *atGrid is a CSS Grid System that uses attributes instead of classes.*

Instead of writing:
```HTML 
<div class="column-6 pull-column-2">
``` 
you can write 
```HTML
<div column="6 +2">
```

## Installation

```
$ npm install atgrid.css
```

## Examples:
```HTML
<section container>
  <!-- Default -->
  <article column="6">
    <!-- Element with a width of 6 columns -->
  </article>

  <!-- With offset -->
  <article column="4 +2">
    <!-- Element with a width of 4 columns and an offset of 2 columns-->
  </article>
</section>

<section>
  <!-- Default with no gutters -->
  <article column="6 no-gutter">
    <!-- Element with a width of 6 columns and no guters -->
  </article>

  <!-- With offset and no gutters -->
  <article column="4 +2 no-gutter">
    <!-- Element with a width of 4 columns, an offset of 2 columns and no gutter-->
  </article>
</section>
```


Also you can use atGrid.css like other "semantic" grid systems (Using Stylus):

```Stylus
.container
  ag-container()

// Column with a width of 50%
.element
  ag-column(1/2)
  
// Column with a width of 50% and an offset of 25%
.element2
  ag-column(1/2, 1/4)
  
// Column with a width of 50%, an offset of 25% and without gutters
.element3
  ag-column(1/2, 1/4, false)
```


## HTML Attributes

#### `container`
Sets the element as a container

#### `column="num-columns [+offset] [no-gutter]"`
Sets the element as a column

## Configuration

#### `container-width`
**Default:** 75em <br>
**Description**: Maximum width of the container element

#### `gutter`
**Default:** 2em <br>
**Description:** Space between columns

#### `num-columns`
**Default:** 12 <br>
**Description:** Number of columns

#### `prefix`
**Default:** '' <br>
**Description:** Prefix for the attributes, use `data-` if you need valid HTML

#### `breakpoint`
**Default:** false <br>
**Description:** Below this point the columns are expanded to 100%

#### `only-semantic`
**Default:** false <br>
**Description:** Set this to true if you want to use only the mixins and avoid the generation of CSS code.

## Available Stylus mixins

#### `ag-container()`
**Description:** Creates a container element

#### `ag-column(size: *number*, [offset: *number*], [add-gutter: *bool*])`
**Description:** Creates a column element


## License

The MIT License (MIT)

Copyright (c) 2016 James Kolce
