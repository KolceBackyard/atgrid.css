atGrid.css - CSS Grid System with attribute selectors
======

> *atGrid is a CSS Grid System that uses attributes instead of classes.*

Instead of writing:
```HTML 
<div class="column-6 pull-column-2">
``` 
you can write 
```HTML
<div column="6 +2">
```

### Installation

```
$ npm install atgrid.css
```

### Examples:
```HTML
<main container>
  <!-- Default -->
  <div row>
    <section column="6">
      <!-- Element with a width of 6 columns -->
    </section>

    <section column="4 +2">
      <!-- Element with a width of 4 columns and an offset of 2 columns-->
    </section>
  </div>
  
  <!-- No Gutters -->
  <div row="no-gutter">
    <section column="6">
      <!-- Element with a width of 6 columns and no guters -->
    </section>

    <section column="4 +2">
      <!-- Element with a width of 4 columns, an offset of 2 columns and no gutter-->
    </section>
  </div>
</main>
```

**Note:** You can prefix the attributes with "data-" if you want, editing the `prefix` variable.


Also you can use atGrid.css like other "semantic" grid systems (Using Stylus):

```CSS
.container
  ag-container()

.element-container
  ag-row()

.element
  ag-column(1/2)
```

If you plan to use only semantic grid systems, you can disable the creation of extra code
by setting `only-semantic` to `true`

## Configuration
| Variable | Default value | Description |
| --- | --- | --- |
| container-width | 1200px | MAximum width for the container |
| gutter | 30 | Gutter size in pixels (without the unit we can do math easily) |
| num-columns | 12 | Number of columns in a row. If you are using only semantic grids you don't need this |
| prefix | "" *(empty string)* | Prefix for the attributes. If you want valid HTML you can use "data-" as prefix |
| breakpoint | 0 | Below this point the columns will have width of 100%, set to `0` if you want to disable the breakpoint
| only-semantic | false | Prevents the creation of predefined columns

## Available Stylus mixins
| Mixin | Options |
| --- | --- | --- |
| ag-container() | The *ag-container()* mixin doesn’t accepts any options. |
| ag-row(*&lt;add-gutter: bool&gt;*) | The *ag-row()* mixin accepts a boolean option, True by default where the columns won't have gutter |
| ag-column(*&lt;size: number&gt;, &lt;offset: number&gt;*) | The *ag-column()* mixin accepts two options: <br> **Size:** Must be a number between 0 and 1 (e.g. 1/2). <br> **Offset:** Must be a number between 0 and 1 - the column size (e.g. 1/6) |

## License

The MIT License (MIT)

Copyright (c) 2016 James Kolce
