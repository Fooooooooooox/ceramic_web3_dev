var test = require('./test');
var testMultiple = require('./testMultiple');
var getType = require('./getType');
var tests = require('./tests');

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
is.same = is.sameType = require('./isSame');
is.type = require('./getType')
is.checkType = require('./getTypeAdvanced');

module.exports = is;