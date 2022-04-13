var isEmpty = require('./isEmpty');

module.exports = function isTrue(obj){
	return !isEmpty(obj);
}