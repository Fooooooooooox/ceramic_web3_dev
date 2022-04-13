module.exports = function isNumber(obj){
	return typeof obj === 'number' && isNaN(obj) === false &&
		obj !== Number.POSITIVE_INFINITY &&
		obj !== Number.NEGATIVE_INFINITY;
};