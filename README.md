# atGrid.css - CSS Grid System with attribute selectors

> atGrid is a Flexbox-based CSS Grid System that uses attributes instead of classes.

## Examples

### Columns with the same width

```HTML 
<div grid>
  <section column>
    <p>Auto</p>
  </section>

  <section column>
    <p>Auto</p>
  </section>
</div>
```

### Columns with a determined width

```HTML
<div grid>
  <section column="8">
    <p>8</p>
  </section>

  <section column="4">
    <p>4</p>
  </section>
</div>
```

### Columns without gutters

```HTML
<div grid="ng">
  <section column="8">
    <p>8</p>
  </section>

  <section column="4">
    <p>4</p>
  </section>
</div>
```

### Columns with offsets

```HTML
<div grid>
  <section column="3">
    <p>3</p>
  </section>

  <section column="3 +6">
    <p>3 +6</p>
  </section>
</div>
```

### Columns with offsets and without gutters

```HTML
<div grid="ng">
  <section column="5">
    <p>5</p>
  </section>

  <section column="5 +2">
    <p>5 +2</p>
  </section>
</div>
```

### Nested grids

```HTML
<div grid>
  <section column="4">
    <p>4</p>
  </section>

  <section column="8">
    <div grid>
      <section column="6">
        <p>6 > 8</p>
      </section>

      <section column="6">
        <p>6 > 8</p>
      </section>
    </div>
  </section>
</div>
```

### Nested grids without gutters

```HTML
<div grid="ng">
  <section column="4">
    <p>4</p>
  </section>

  <section column="8">
    <div grid="ng">
      <section column="6">
        <p>6 > 8</p>
      </section>

      <section column="6">
        <p>6 > 8</p>
      </section>
    </div>
  </section>
</div>
``` 


## Installation

```
$ npm install atgrid.css
```

## Browser Compatibility

Since version 4.0.0, atGrid.css is based on Flexbox, you can see the table of compatibility in the [Can I Use](http://caniuse.com/#feat=flexbox) site.


## HTML Attributes

`container`
Sets the element as a container, the container element will have a fixed max-width and will be centered on the page.

`grid`
Sets the element as a grid element. This is a required element, and should be direct parent of the column elements.

`column`
Sets the element as a column, should always be used inside a grid element. A column can also contain a grid element to nest grids.

## Attribute values

### Container

The container element doesn't accept any values.

### Grid

`ng`
Will create a grid where the columns doesn't have gutters.

`top`
Aligns all the columns inside vertically to the top of the grid.

`center`
Aligns all the columns inside vertically to the center of the grid.

`bottom`
Aligns all the columns inside vertically to the bottom of the grid.


### Column

`<width>`
The width of the column, by default from 1 to 12.

`+<offset>`
The offset of the column, by default from 1 to 11.

`top`
Aligns the column vertically to the top of the grid.

`center`
Aligns the column vertically to the center of the grid.

`bottom`
Aligns the column vertically to the bottom of the grid.


## Configuration

`container-width` <br>
**Default:** 1200px <br>
**Description**: Maximum width of the container element.

`gutter` <br>
**Default:** 2em <br>
**Description:** Space between columns.

`num-columns` <br>
**Default:** 12 <br>
**Description:** Number of columns.

`prefix` <br>
**Default:** '' <br>
**Description:** Prefix for the attributes, use `data-` if you need valid HTML.

`breakpoint` <br>
**Default:** 420px <br>
**Description:** Below this point the columns are expanded to 100%.


## License

The MIT License - James Kolce
