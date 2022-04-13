var test = require('./test');

module.exports = function testMultiple(){
	var l = arguments.length;
	var last = l-1;
	var type;
	var obj;
	while(l--){
		if(l==last){
			type = arguments[l];
		}else{
			obj = arguments[l];
			if(!test(obj,type)){return false;}
		}
	}
	return true;
}