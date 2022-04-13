var tests = {
	null: require('./isNull'),
	arguments: require('./isArguments'),
	array: require('./isArray'),
	boolean: require('./isBoolean'),
	date: require('./isDate'),
	error: require('./isError'),
	function: require('./isFunction'),
	htmlcollection: require('./isHTMLCollection'),
	integer: require('./isInteger'),
	native:require('./isNative'),
	node: require('./isNode'),
	number: require('./isNumber'),
	numeric: require('./isNumeric'),
	object: require('./isObject'),
	regexp: require('./isRegExp'),
	string: require('./isString'),
	arraylike:require('./isArrayLike'),
	reference: require('./isReference'),
	true: require('./isTrue'),
	undefined: require('./isUndefined'),
	empty: require('./isEmpty'),
	false: require('./isFalse'),
	defined: require('./isDefined')
}

tests.args = tests.arguments;
tests.arr = tests.array;
tests.arrayLike = tests.arraylike;
tests.bool = tests.boolean;
tests.def = tests.defined;
tests.err = tests.error;
tests.falsy = tests.false;
tests.fun = tests.func = tests.fn = tests.function;
tests.HTMLCollection = tests.htmlCollection = tests.htmlcollection;
tests.int = tests.integer;
tests.obj = tests.object;
tests.ref = tests.reference;
tests.regExp = tests.regularExpression = tests.regex = tests.regexp;
tests.str = tests.string;
tests.truthy = tests.true;
tests.undef = tests.undefined;

module.exports = tests;