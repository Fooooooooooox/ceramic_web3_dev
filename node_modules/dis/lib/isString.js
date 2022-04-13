var toString = require('./toString');

module.exports = function isString(obj){return toString.call(obj) == '[object String]';};