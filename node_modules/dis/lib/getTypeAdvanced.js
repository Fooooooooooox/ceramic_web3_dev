var tests = require('./tests');

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