var toString = require('./toString');
var hasOwnProperty = require('./hasOwnProperty');

module.exports = function isHTMLCollection(obj){
	var result = toString.call(obj);
	if (
		typeof nodes === 'object' &&
		/^\[object (HTMLCollection|NodeList|Object)\]$/.test(result) &&
		hasOwnProperty.call(nodes,'length') &&
		(nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0))
	) {
		return true;
	}
	return false;
};