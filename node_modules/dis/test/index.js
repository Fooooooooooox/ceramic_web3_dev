require('chai').should();

describe('methods',function(){
	describe('#getType(obj)',function(){
		it('should return the type of the object',function(){
			var getType = require('../lib/getType');
			var a = [];
			var b = {};
			var c = '';
			var d = new Date();
			var e = new Error();
			var f = (function(){return arguments;})();
			var g = true;
			var h = null;
			var i = 1;
			var j = /something/;
			var k;
			getType(a).should.equal('array');
			getType(b).should.equal('object');
			getType(c).should.equal('string');
			getType(d).should.equal('date');
			getType(e).should.equal('error');
			getType(f).should.equal('arguments');
			getType(g).should.equal('boolean');
			getType(h).should.equal('null');
			getType(i).should.equal('number');
			getType(j).should.equal('regexp');
			getType(k).should.equal('undefined');
		});
	});
	describe('#getTypeAdvanced(obj)',function(){
		it('should return the type of the object',function(){
			var getType = require('../lib/getTypeAdvanced');
			var a = [];
			var b = {};
			var c = '';
			var d = new Date();
			var e = new Error();
			var f = (function(){return arguments;})();
			var g = true;
			var h = null;
			var i = 1;
			var j = /something/;
			var k;
			var l = 1.5;
			getType(a).should.equal('array');
			getType(b).should.equal('object');
			getType(c).should.equal('string');
			getType(d).should.equal('date');
			getType(e).should.equal('error');
			getType(f).should.equal('arguments');
			getType(g).should.equal('boolean');
			getType(h).should.equal('null');
			getType(i).should.equal('integer');
			getType(j).should.equal('regexp');
			getType(k).should.equal('undefined');
			getType(l).should.equal('number');
		});
	});
	describe('#getTypeAdvanced(obj,type)',function(){
		it('should return true if the object\'s type == type',function(){
			var getType = require('../lib/getTypeAdvanced');
			var a = [];
			var b = {};
			var c = '';
			var d = new Date();
			var e = new Error();
			var f = (function(){return arguments;})();
			var g = true;
			var h = null;
			var i = 1;
			var j = /something/;
			var k;
			var l = 1.5;
			getType(a,'array').should.be.true;
			getType(a,Array).should.be.true;
			getType(b,'object').should.be.true;
			getType(c,'string').should.be.true;
			getType(c,String).should.be.true;
			getType(d,'date').should.be.true;
			getType(e,'error').should.be.true;
			getType(f,'arguments').should.be.true;
			getType(g,'boolean').should.be.true;
			getType(h,'null').should.be.true;
			getType(i,'integer').should.be.true;
			getType(j,'regexp').should.be.true;
			getType(k,'undefined').should.be.true;
			getType(l,'number').should.be.true;
		});
	});
	describe('#getTypeAdvanced.tests',function(){
		it('should add new types if overloaded',function(){
			var getType = require('../lib/getTypeAdvanced');
			var SomeClass = function(){};
			getType.tests.sometype = function(obj){
				return (obj instanceof SomeClass);
			};
			var a = new SomeClass();
			getType(a).should.equal('sometype');
			getType(a,'sometype').should.be.true;
		});
	});
	describe('#test(obj,type)',function(){
		it('should check if `obj` is of type `type`',function(){
			var test = require('../lib/test');
			var a = [];
			var b = {};
			var c;
			test(a,Array).should.be.true;
			test(b,'object').should.be.true;
			test(c,'undefined').should.be.true;
		});
	});
	describe('#testMultiple(obj,...,type)',function(){
		it('should check multiple objects for their type',function(){
			var test = require('../lib/testMultiple');
			var a,b,c,d,e,f;
			a = b = c = d = e = f = [];
			test(a,b,c,d,e,Array).should.be.true;
			test(a,b,c,d,e,'string').should.be.false;
		});
	});
	describe('#same(obj,obj,...)',function(){
		it('should check if all provided objects are of the same type',function(){
			var same = require('../lib/isSame');
			same([],[],[]).should.be.truthy;
			same({},{},'').should.be.false;
		});
	});
});

describe('Tests',function(){
	describe('#isArguments(obj)',function(){
		it('should return true if the object passed is an arguments object',function(){
			var isArguments = require('../lib/isArguments');
			var args = (function(a,b,c){return arguments;})();
			isArguments(args).should.be.true;
			var b = [];
			isArguments(b).should.be.false;
		});
	});
	describe('#isArray(obj)',function(){
		it('should return true if the object passed is an array',function(){
			var isArray = require('../lib/isArray');
			var a = [];
			isArray(a).should.be.true;
			var b = {length:2,0:'',1:''};
			isArray(b).should.be.false;
		});
	});
	describe('#isArrayLike(obj)',function(){
		it('should return true if the object passed looks like an array',function(){
			var isArrayLike = require('../lib/isArrayLike');
			var a = [];
			var b = {length:2,0:'0',1:'1'};
			var c = {length:1,1:'1'};
			isArrayLike(a).should.be.true;
			isArrayLike(b).should.be.true;
			isArrayLike(c).should.be.false;
		});
	})
	describe('#isBoolean(obj)',function(){
		it('should return true if the object is strictly true or false',function(){
			var isBoolean = require('../lib/isBoolean');
			var a = true;
			var b = false;
			var c;
			isBoolean(a).should.be.true;
			isBoolean(b).should.be.true;
			isBoolean(c).should.be.false;
		});
	});
	describe('#isDate(obj)',function(){
		it('should return true if the object is a date',function(){
			var a = new Date();
			var b = Date();
			var c = [0,0,0];
			var isDate = require('../lib/isDate');
			isDate(a).should.be.true;
			isDate(b).should.be.false;
			isDate(c).should.be.false;
		});
	});
	describe('#isDefined(obj)',function(){
		it('should return true if the object is defined',function(){
			var a = '';
			var b;
			var isDefined = require('../lib/isDefined');
			isDefined(a).should.be.true;
			isDefined(b).should.be.false;
		});
	});
	describe('#isEmpty(obj)',function(){
		it('should return true on empty arrays',function(){
			var isEmpty = require('../lib/isEmpty');
			var a = [];
			var b = ['a'];
			isEmpty(a).should.be.true;
			isEmpty(b).should.be.false;
		});
		it('should return true on empty objects',function(){
			var isEmpty = require('../lib/isEmpty');
			var a = {};
			var b = {a:'a'};
			isEmpty(a).should.be.true;
			isEmpty(b).should.be.false;
		});
		it('should return true on empty strings',function(){
			var isEmpty = require('../lib/isEmpty');
			var a = '';
			var b = 'abc'
			isEmpty(a).should.be.true;
			isEmpty(b).should.be.false;
		});
		it('should return true on `false`',function(){
			var isEmpty = require('../lib/isEmpty');
			var a = false;
			var b = true;
			isEmpty(a).should.be.true;
			isEmpty(b).should.be.false;
		});
	});
	describe('#isError(obj)',function(){
		it('should return true if obj is an Error',function(){
			var a = new Error();
			var b = '';
			var isError = require('../lib/isError');
			isError(a).should.be.true;
			isError(b).should.be.false;
		});
	});
	describe('#isFunction(obj)',function(){
		it('should return true if obj is a function',function(){
			var a = function(){};
			var b = function Named(){};
			var c = Date;
			var d = Array;
			var e = '';
			var isFunction = require('../lib/isFunction');
			isFunction(a).should.be.true;
			isFunction(b).should.be.true;
			isFunction(c).should.be.true;
			isFunction(d).should.be.true;
			isFunction(e).should.be.false;
		});
	});
	describe.skip('#isHTMLCollection(obj)',function(){

	});
	describe('#isInteger(obj)',function(){
		it('should return true if obj is an integer',function(){
			var a = 1;
			var b = 0;
			var c = 1.5;
			var d = '1';
			var e = '1.5';
			var f = 0x00f;
			var isInteger = require('../lib/isInteger');
			isInteger(a).should.be.true;
			isInteger(b).should.be.true;
			isInteger(c).should.be.false;
			isInteger(d).should.be.true;
			isInteger(e).should.be.false;
			isInteger(f).should.be.true;
		});
	});
	describe('#isNative(obj)',function(){
		it('should return true if obj is a native function',function(){
			var a = function(){};
			var b = function Named(){};
			var c = Date;
			var d = Array;
			var e = '';
			var isNative = require('../lib/isNative');
			isNative(a).should.be.false;
			isNative(b).should.be.false;
			isNative(c).should.be.true;
			isNative(d).should.be.true;
			isNative(e).should.be.false;
		});		
	});
	describe.skip('#isNode(obj)',function(){

	});
	describe('#isNull(obj)',function(){
		it('should return true if obj is strictly null',function(){
			var a = null;
			var b = 'null';
			var c;
			var isNull = require('../lib/isNull');
			isNull(a).should.be.true;
			isNull(b).should.be.false;
			isNull(c).should.be.false;
		});
	});
	describe('#isNumber(obj)',function(){
		it('should return true if obj is strictly a number',function(){
			var a = 1;
			var b = 0;
			var c = 1.5;
			var d = '1';
			var e = '1.5';
			var f = 0x00f;
			var isNumber = require('../lib/isNumber');
			isNumber(a).should.be.true;
			isNumber(b).should.be.true;
			isNumber(c).should.be.true;
			isNumber(d).should.be.false;
			isNumber(e).should.be.false;
			isNumber(f).should.be.true;
		});
	});
	describe('#isNumeric(obj)',function(){
		it('should return true if obj looks like number',function(){
			var a = 1;
			var b = 0;
			var c = 1.5;
			var d = '1';
			var e = '1.5';
			var f = 0x00f;
			var g = '0x00f';
			var h = '18$';
			var i = 'a';
			var isNumeric = require('../lib/isNumeric');
			isNumeric(a).should.be.true;
			isNumeric(b).should.be.true;
			isNumeric(c).should.be.true;
			isNumeric(d).should.be.true;
			isNumeric(e).should.be.true;
			isNumeric(f).should.be.true;
			isNumeric(g).should.be.true;
			isNumeric(h).should.be.false;
			isNumeric(i).should.be.false;
		});	
	});
	describe('#isObject(obj)',function(){
		it('should return true if obj is a plain object',function(){
			var a = {};
			var b = new Object();
			var c = Object.create({});
			var d = new Date();
			var isObject = require('../lib/isObject');
			isObject(a).should.be.true;
			isObject(b).should.be.true;
			isObject(c).should.be.true;
			isObject(d).should.be.false;
		});
	});
	describe('#isReference(obj)',function(){
		it('should return true if obj is not a string or a number',function(){
			var isReference = require('../lib/isReference');
			var a = '';
			var b = 1;
			var c = {};
			var d = [];
			isReference(a).should.be.false;
			isReference(b).should.be.false;
			isReference(c).should.be.true;
			isReference(d).should.be.true;
		});
	});
	describe('#isRegExp(obj)',function(){
		it('should return true if obj is a regular expression',function(){
			var isRegExp = require('../lib/isRegExp');
			var a = /something/g;
			var b = new RegExp('something');
			var c = '/something/g';

			isRegExp(a).should.be.true;
			isRegExp(b).should.be.true;
			isRegExp(c).should.be.false;
		});
	});
	describe('#isString(obj)',function(){
		it('should return true if obj is a string',function(){
			var isString = require('../lib/isString');
			var a = '';
			var b = new String();
			var c = 1;
			isString(a).should.be.true;
			isString(b).should.be.true;
			isString(c).should.be.false;
		});
	});
	describe('#isTrue(obj)',function(){
		it('should return true if obj is truthy',function(){
			var isTrue = require('../lib/isTrue');
			var a = ['a'];
			var b = {'a':'a'};
			var c = 1;
			var d = true;
			var e = [];
			var f = {};
			var g = 0;
			var h = false;
			isTrue(a).should.be.true;
			isTrue(b).should.be.true;
			isTrue(c).should.be.true;
			isTrue(d).should.be.true;
			isTrue(e).should.be.false;
			isTrue(f).should.be.false;
			isTrue(g).should.be.false;
			isTrue(h).should.be.false;
		});
	});
	describe('#isUndefined(obj)',function(){
		it('should return true if obj is undefined',function(){
			var isUndefined = require('../lib/isUndefined');
			var a;
			var b = 'undefined';
			var c = null;
			isUndefined(a).should.be.true;
			isUndefined(b).should.be.false;
			isUndefined(c).should.be.false;
		});
	});
})