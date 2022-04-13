var toString = require('./toString');

/**
 * Returns the type of the object.
 * May return any of:
 *  - arguments
 *  - array
 *  - boolean
 *  - date
 *  - error
 *  - function
 *  - html collection (depending on the browser)
 *  - null
 *  - number
 *  - object
 *  - regexp
 *  - string
 *  - undefined
 * @param  {*} obj Object to get the type of
 * @return {string}     the type
 */
module.exports = function getType(obj){
	if(typeof obj === 'undefined'){return 'undefined';}
	return toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};