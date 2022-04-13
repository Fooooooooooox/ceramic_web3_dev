var isString = require('./isString');
var isNumber = require('./isNumber');
var isInteger = require('./isInteger');

module.exports = function isReference(obj){
	return (!isString(obj) && !isNumber(obj) && !isInteger(obj));
}