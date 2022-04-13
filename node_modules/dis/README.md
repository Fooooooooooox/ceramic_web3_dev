# Dis

Tiny tiny Library to check object types.
Works in node and your browser.

Use it like this:

first require it:
```js
var is = require('dis');
```

or in browser:
```html
<script type="text/javascript" src="dis"></script>
```
You'll find the browser version in `/dist`;

Then check:
    
```js
is.object(<obj>)
```

OR
```js
is(<obj>,"object")
```

OR

```js
is(<obj>, Object)
```

all are equally valid, but note that the function call `is.<type>(<object>)` will do a thorough check whereas `is(<object>,<type>)` will do a shallow check (simply calling Object.prototype.toString on the object);

You can also do things like:
```js
	 is(<obj>) // returns type as a string
	 is(<var1>,<var2>,<var3>,...,Array) // checks that all vars are of type 'array'
```

note: I use "is" because it's shorter and more explicative. This is how I had named the plugin originally, but the name was not available on npm, so I had to revert to something else.
the original "is" plugin is [here](http://github.com/enricomarino/is). It's sorta similar, but has more functions, and a different API. See if you like it better.

---

## Require only what you need

All functions are available separately. If you know you'll only need to check for 'empty', for example, then you can just include `var isEmpty = require('dis/lib/isEmpty)`.

To do this in the browser, you'll need to whip up your own build, through gulp, webpack, or whatever tickles your fancy.

---

## API

### is.type(obj)
Returns a string that represents the object's type.
That string might be any of:

- arguments
- array
- boolean
- date
- error
- function
- html collection (depending on the browser)
- null
- number
- object
- regexp
- string
- undefined

### is.checkType(obj,[type])
If called without the `type` arguments, yields same results as `is.type`, but has more thorough checks. Whereas is.type simply calls `Object.prototype.toString` on the object, `is.check` goes through all the checks available to determine the type. Of course, this is much slower.

If called with the `type` argument, checks the object against the type provided, where `type` is:
- a string (`'array'`, `'string'`, ...)
- a native function (`Array`, `String`)
- a named function `function NamedFunction(){}`
-  `true`
-  `false`

If `type` is not a known type, throws an error.

You can add your own tests by overloading the `is.check.tests` object.   
Example:
```js
function CustomObject(){}
is.check.tests.customObj = function(obj){
	return obj instanceof CustomObject;
}
var obj = new CustomObject();
console.log(is.checkType(obj)) //returns 'customObj'
console.log(is.checkType(obj,'customObj'))//return `true`
```


### is.test(obj,type)
Tests if `obj` is of `type`, where obj is anything, and type is:

- a string (`'array'`, `'string'`, ...)
- a native function (`Array`, `String`)
- a named function `function NamedFunction(){}`
-  `true`
-  `false`

`is.test` makes use of `is.type`, so it won't check for custom objects like `is.checkType` would.

### is.testMultiple(obj[,...obj],type)
Same as `is.test`, but will test all provided objects against the type.

### is.same(obj,obj[,...obj])
Checks that all provided objects are of the same type. If not, returns `false`. If they are, returns the type as a string.
Aliases as `is.sameType`.

### is(obj)
Alias for `is.type(obj)`

### is(obj,type)
Alias for `is.test(obj,type)`

### is(obj,obj[,...obj],type)
Alias for `is.testMultiple`


---

### Complete list of tests

### is.arguments(obj)
Checks if `obj` is an arguments object. Please be aware than passing the arguments around [stops optimization](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments).  
Alias: `is.args`.

### is.array(obj)
Checks if `obj` is an Array.  
Aliases: `is.arr`

### is.boolean(obj)
Checks if `obj` is strictly `true` or `false`.  
Alias: `is.bool`

### is.date(obj)
Checks if `obj` is a date object.  

### is.defined(obj)
Checks if `obj` is defined.  
Alias: `is.def`

### is.empty(obj)
Checks if `obj` is an empty array, an object with no properties, false, or an empty string. In essence, checks if the object is 'falsy'.  
Aliases: `is.false`, `is.falsy`

### is.error(obj)
Checks if `obj` is of type Error.  
Alias: `is.err`

### is.function(obj)
Checks if `obj` is a Function.
Aliases: `is.fun`,`is.fn`,`is.func`

### is.HTMLCollection(obj)
Checks if `obj` is an HTML nodes collection.  
Aliases: `is.htmlCollection`, `is.htmlcollection`

### is.integer(obj)
Checks if `obj` is an integer.  
Alias: `is.int`

### is.native(obj)
Checks if `obj` is a native function.

### is.node(obj)
Checks if `obj` is an HTML node.  

### is.null(obj)
Checks if `obj` is strictly null.

### is.number(obj)
Checks if `obj` is strictly a number.

### is.numeric(obj)
Checks if `obj` can be cast to a number. Works on strings etc.

### is.object(obj)
Checks if `obj` is a plain object, that is, if its prototype is `Object`.  
Alias: `is.obj`

### is.reference(obj)
Checks if `obj` would be passed by reference. Anything else than string or number returns true.  
Alias: `is.ref`

### is.regexp(obj)
Checks if `obj` is of RegExp type.  
Aliases: `is.regExp`, `is.regularExpression`

### is.string(obj)
Checks if `obj` is a String.  
Aliases: `is.str`

### is.true(obj)
Checks if `obj` is truthy. Empty arrays, empty objects and the like return false.  
Alias: `is.truthy`

### is.undefined(obj)
Checks if `obj` is undefined.  
Alias: `is.undef`

---

## Tests, build

test:
```bash
npm test
```

continuous testing
```bash
npom run dev
```

build:
```bash
npm run build
```

---

## License

MIT