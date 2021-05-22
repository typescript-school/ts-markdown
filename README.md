# Creating markdown tables

Based on GFM : Github flavoured markdown



What is a markdown table ?

>  Part of markdown extension.
>
> A [table](https://github.github.com/gfm/#table) is an arrangement of data with rows and columns, consisting of a single header row, a [delimiter row](https://github.github.com/gfm/#delimiter-row) separating the header from the data, and zero or more data rows.
>
> Each row consists of cells containing arbitrary text, in which [inlines](https://github.github.com/gfm/#inline) are parsed, separated by pipes (`|`). A leading and trailing pipe is also recommended for clarity of reading, and if there’s otherwise parsing ambiguity. Spaces between pipes and cell content are trimmed. Block-level elements cannot be inserted in a table.



**[delimiter row](https://github.github.com/gfm/#delimiter-row)** 

> consists of cells whose only content are hyphens (`-`), and optionally, a leading or trailing colon (`:`), or both, to indicate left, right, or center alignment respectively.
>
> **Cells in one column don’t need to match length,**



**Create a simple table in typescript**

```
|col-one-head|col-one-head|
|-|-|
|row-one-col-one|row-two-col-two|
```

is rendered as : 

|col-one-head|col-one-head|
|-|-|
|row-one-col-one|row-two-col-two|







Refer : https://github.github.com/gfm/#tables-extension-

