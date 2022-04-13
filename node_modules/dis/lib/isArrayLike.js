var isNumber = require('./isNumber');

module.exports = function isArrayLike(obj){
	if(typeof obj === 'undefined'){return false;}
	return  isNumber(obj.length) && (obj.length == 0 || (0 in obj))
}