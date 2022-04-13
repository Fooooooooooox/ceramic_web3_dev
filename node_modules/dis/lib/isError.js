var toString = require('./toString');
module.exports = function isError(obj){return toString.call(obj) === '[object Error]';};