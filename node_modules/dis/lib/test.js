
var tests = require('./tests');
var hasOwnProperty = require('./hasOwnProperty');

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