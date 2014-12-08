atGrid.css - CSS Grid System with HTML Attributes
======

*atGrid is a CSS Grid System that uses HTML attributes instead of classes.*

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
  at-container()

.element-container
  at-row()

.element
  at-column(1/2)
```

##### More information at http://jameskolce.com/atgrid
