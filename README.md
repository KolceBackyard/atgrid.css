atGrid.css - CSS Grid System with HTML Attributes
======

> *atGrid is a CSS Grid System that uses HTML attributes instead of classes.*

Instead of writing ``<div class="column-6 pull-column-2">`` you can write ``<div column="6 +2">``

### Examples:
```HTML
<main container>
  <div row>
    <section column="6">
      <!-- Element with a width of 6 columns -->
    </section>

    <section column="4 +2">
      <!-- Element with a width of 4 columns and an offset of 2 columns-->
    </section>
  </div>
</main>
```

**Note:** You can prefix the attributes with "data-" if you want.


Also you can use atGrid.css like other "semantic" grid systems (Using Stylus):

```CSS
.container
  ag-container()

.element-container
  ag-row()

.element
  ag-column(1/2)
```

## Configuration
| Variable | Default value | Description |
| --- | --- | --- |
| container-width | 1200px | MAximum width for the container |
| gutter | 30 | Gutter size in pixels (without the unit we can do math easily) |
| num-columns | 12 | Number of columns in a row. If you are using only semantic grids you don't need this |
| prefix | "" *(empty string)* | Prefix for the attributes. If you want valid HTML you can use "data-" as prefix |
| breakpoint | 48em | Below this point the columns will have width of 100%
| only-semantic | false | Prevents the creation of predefined columns

## Available Stylus mixins
| Mixin | Options |
| --- | --- | --- |
| ag-container() | The *ag-container()* mixin doesn’t accepts any options. |
| ag-row(*&lt;clear-gutter: bool&gt;*) | The *ag-row()* mixin accepts a boolean option, True by default, this value should be true if you plan to contain columns with gutters. |
| ag-column(*&lt;size: number&gt;, &lt;offset: number&gt;, &lt;add-gutter: bool&gt;*) | The *ag-column()* mixin accepts three options: <br> **Size:** Must be a number between 0 and 1 (e.g. 1/2). <br> **Offset:** Must be a number between 0 and 1 - the column size (e.g. 1/6) <br> **Add-gutter:** Must be a boolean, True by default, set to False if you want a column without gutters, in this case remember to set *ag-row(false)* |
