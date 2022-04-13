var toString = require('./toString');
module.exports = function isFunction(obj){
	return toString.call(obj) == '[object Function]';
};