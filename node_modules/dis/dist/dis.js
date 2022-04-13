/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var test = __webpack_require__(16);
	var testMultiple = __webpack_require__(2);
	var getType = __webpack_require__(3);
	var tests = __webpack_require__(4);
	
	function is(obj,type){
		var l = arguments.length;
		if(l>2){
			var args = new Array(l);
			while(l--){args[l] = arguments[l];}
			return testMultiple.apply(null,args);
		}
		if(l == 2){
			return test(obj,type);
		}
		if(l == 1){
			return getType(obj);
		}
		return is;
	};
	
	for(var n in tests){
		is[n] = tests[n];
	}
	
	is.test = test;
	is.testMultiple = testMultiple;
	is.same = is.sameType = __webpack_require__(5);
	is.type = __webpack_require__(3)
	is.checkType = __webpack_require__(6);
	
	module.exports = is;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	var hasOwnProperty = __webpack_require__(7);
	
	module.exports = function isHTMLCollection(obj){
		var result = toString.call(obj);
		if (
			typeof nodes === 'object' &&
			/^\[object (HTMLCollection|NodeList|Object)\]$/.test(result) &&
			hasOwnProperty.call(nodes,'length') &&
			(nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0))
		) {
			return true;
		}
		return false;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var test = __webpack_require__(16);
	
	module.exports = function testMultiple(){
		var l = arguments.length;
		var last = l-1;
		var type;
		var obj;
		while(l--){
			if(l==last){
				type = arguments[l];
			}else{
				obj = arguments[l];
				if(!test(obj,type)){return false;}
			}
		}
		return true;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	
	/**
	 * Returns the type of the object.
	 * May return any of:
	 *  - arguments
	 *  - array
	 *  - boolean
	 *  - date
	 *  - error
	 *  - function
	 *  - html collection (depending on the browser)
	 *  - null
	 *  - number
	 *  - object
	 *  - regexp
	 *  - string
	 *  - undefined
	 * @param  {*} obj Object to get the type of
	 * @return {string}     the type
	 */
	module.exports = function getType(obj){
		if(typeof obj === 'undefined'){return 'undefined';}
		return toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var tests = {
		null: __webpack_require__(9),
		arguments: __webpack_require__(10),
		array: __webpack_require__(11),
		boolean: __webpack_require__(12),
		date: __webpack_require__(13),
		error: __webpack_require__(14),
		function: __webpack_require__(15),
		htmlcollection: __webpack_require__(1),
		integer: __webpack_require__(17),
		native:__webpack_require__(18),
		node: __webpack_require__(19),
		number: __webpack_require__(20),
		numeric: __webpack_require__(21),
		object: __webpack_require__(22),
		regexp: __webpack_require__(23),
		string: __webpack_require__(24),
		arraylike:__webpack_require__(25),
		reference: __webpack_require__(26),
		true: __webpack_require__(27),
		undefined: __webpack_require__(28),
		empty: __webpack_require__(29),
		false: __webpack_require__(30),
		defined: __webpack_require__(31)
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var getType = __webpack_require__(3);
	
	module.exports = function isSameType(){
		var oldType,newType,curr;
		for(var i = 0; i < arguments.length; i++){
			curr = arguments[i];
			newType = getType(curr);
			if(i && oldType != newType){return false;}
			oldType = newType;
		}
		return newType;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var tests = __webpack_require__(4);
	
	var equivs = {
		args:'arguments'
	,	arr:'array'
	,	arrayLike:'arraylike'
	,	bool:'boolean'
	,	def:'defined'
	,	err:'error'
	,	falsy:'false'
	,	fun:'function'
	,	func:'function'
	,	fn:'function'
	,	HTMLCollection:'htmlcollection'
	,	htmlCollection:'htmlcollection'
	,	int:'integer'
	,	obj:'object'
	,	ref:'reference'
	,	regExp:'regexp'
	,	regularExpression:'regexp'
	,	regex:'regexp'
	,	str:'string'
	,	truthy:'true'
	,	undef:'undefined'
	};
	
	var skip = /^(empty|ref(erence)?|tru(e|thy)|fals[ye]|def(ined)?|undef(ined)?)$/i;
	
	function getType(obj){
		if(typeof obj === 'undefined'){return 'undefined';}
		for(var n in tests){
			if(skip.test(n)){continue;}
			if(tests[n](obj)){
				if(equivs[n]){return equivs[n];}
				return n;
			}
		}
		return 'unknown';	
	}
	
	function checkType(obj,type){
		if(type === null){type = 'null';}
		else if(type === true){type = 'true';}
		else if(type === false){type = 'false';}
		else if(tests.function(type)){type = type.name.toLowerCase();}
		else{type = type.toLowerCase();}
		if(!type){
			throw new Error('no type provided');
		}
		if(tests[type]){
			return tests[type](obj);
		}
		throw new Error('unknown object type `'+type+'`');
	}
	
	function getTypeAdvanced(obj,type){
		if(arguments.length>1){
			return checkType(obj,type);
		}
		return getType(obj);
	}
	
	getTypeAdvanced.tests = tests;
	getTypeAdvanced.aliases = equivs;
	
	module.exports = getTypeAdvanced;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Object.prototype.hasOwnProperty;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Object.prototype.toString;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isNull(obj){return obj === null;}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	
	module.exports = function isArguments(obj){return toString.call(obj) == '[object Arguments]';};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	
	module.exports = function isArray(obj){return toString.call(obj) == '[object Array]';};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	
	module.exports = function isBoolean(obj){return obj === true || obj === false || toString.call(obj) == '[object Boolean]';};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isDate(obj){return obj instanceof Date;}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	module.exports = function isError(obj){return toString.call(obj) === '[object Error]';};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	module.exports = function isFunction(obj){
		return toString.call(obj) == '[object Function]';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	var tests = __webpack_require__(4);
	var hasOwnProperty = __webpack_require__(7);
	
	module.exports = function test(obj,type){
		if(type === null){type = 'null';}
		else if(type === true){type = 'true';}
		else if(type === false){type = 'false';}
		else if(tests.function(type)){type = type.name.toLowerCase();}
		else{type = type.toLowerCase();}
		if(!type){
			throw new Error('no type provided');
		}
	
		if(hasOwnProperty.call(tests,type)){
			return tests[type](obj);
		}
		throw new Error('cannot check for unknown type `'+type+'`')
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isInteger(obj){return !isNaN(obj) && parseInt(obj) == obj;};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/** courtesy of http://davidwalsh.name/detect-native-function **/
	
	var toString = __webpack_require__(8);
	
	// Used to resolve the decompiled source of functions
	var fnToString = Function.prototype.toString;
	
	// Used to detect host constructors (Safari > 4; really typed array specific)
	var reHostCtor = /^\[object .+?Constructor\]$/;
	
	// Compile a regexp using a common native method as a template.
	// We chose `Object#toString` because there's a good chance it is not being mucked with.
	var reNative = RegExp('^' +
	// Coerce `Object#toString` to a string
	String(toString)
	// Escape any special regexp characters
	.replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
	// Replace mentions of `toString` with `.*?` to keep the template generic.
	// Replace thing like `for ...` to support environments like Rhino which add extra info
	// such as method arity.
	.replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	module.exports = function isNative(value) {
		var type = typeof value;
		return type == 'function'
		// Use `Function#toString` to bypass the value's own `toString` method
		// and avoid being faked out.
		? reNative.test(fnToString.call(value))
		// Fallback to a host object check because some environments will represent
		// things like typed arrays as DOM methods which may not conform to the
		// normal native pattern.
		: (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isNode(obj){return !!(obj && obj.nodeType == 1);};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isNumber(obj){
		return typeof obj === 'number' && isNaN(obj) === false &&
			obj !== Number.POSITIVE_INFINITY &&
			obj !== Number.NEGATIVE_INFINITY;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isNumeric(obj){return !isNaN(parseFloat(obj)) && isFinite(obj);};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isObject(obj){return typeof obj=='object' && obj.constructor == Object;};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isRegExp(obj){return obj instanceof RegExp;};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(8);
	
	module.exports = function isString(obj){return toString.call(obj) == '[object String]';};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isNumber = __webpack_require__(20);
	
	module.exports = function isArrayLike(obj){
		if(typeof obj === 'undefined'){return false;}
		return  isNumber(obj.length) && (obj.length == 0 || (0 in obj))
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isString = __webpack_require__(24);
	var isNumber = __webpack_require__(20);
	var isInteger = __webpack_require__(17);
	
	module.exports = function isReference(obj){
		return (!isString(obj) && !isNumber(obj) && !isInteger(obj));
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isEmpty = __webpack_require__(29);
	
	module.exports = function isTrue(obj){
		return !isEmpty(obj);
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isUndefined(obj){return (typeof obj === 'undefined');}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isDefined = __webpack_require__(31);
	var emptyString = '';
	var hasOwnProperty = __webpack_require__(7);
	var isNumber = __webpack_require__(20);
	
	module.exports = function isEmpty(obj){
		if((!isDefined(obj)) || obj == emptyString){return true;}
		if(obj === false){return true;}
		if(obj === true){return false;}
		if(isNumber(obj)){return !!!(obj>0);}
		if(typeof obj === 'string'){return !!!obj;}
		if(typeof obj.length !=='undefined'){return !!!(obj.length > 0);}
		for (var key in obj) {
			if (hasOwnProperty.call(obj, key)){return false;}
		}
		return true;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isEmpty = __webpack_require__(29);
	
	module.exports = function isFalse(obj){
		return isEmpty(obj);
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function isDefined(obj){return !(obj===null || typeof obj === 'undefined');};

/***/ }
/******/ ]);
//# sourceMappingURL=dis.js.map