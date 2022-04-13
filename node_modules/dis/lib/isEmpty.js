var isDefined = require('./isDefined');
var emptyString = '';
var hasOwnProperty = require('./hasOwnProperty');
var isNumber = require('./isNumber');

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
