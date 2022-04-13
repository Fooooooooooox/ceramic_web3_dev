var getType = require('./getType');

module.exports = function isSameType(){
	var oldType,newType,curr;
	for(var i = 0; i < arguments.length; i++){
		curr = arguments[i];
		newType = getType(curr);
		if(i && oldType != newType){return false;}
		oldType = newType;
	}
	return newType;
};