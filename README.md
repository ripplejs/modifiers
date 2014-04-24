# modifiers

Plugin for ripple to add helpful value modifiers

## Install

```
component install ripplejs/modifiers
```

## Usage

Add the plugin:

```
var ripple = require('ripple');
var modifiers = require('modifiers');

var View = ripple('<div></div>')
    .use(modifiers());
```

This adds some methods to the `View` prototype to modify values.

## add(attr, number)

```
this.add('count', 1);
```

Returns `this` for chaining.

## minus(attr, number)

```
this.minus('count', 1);
```

Returns `this` for chaining.

## toggle(attr, [expression])

Toggle a boolean value.

```
this.toggle('checked');
```

Takes an optional second parameter that can be an expression to determine which way to toggle it.

```
this.toggle('checked', 2 > 1);
```

Returns `this` for chaining.