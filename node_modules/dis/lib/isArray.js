var toString = require('./toString');

module.exports = function isArray(obj){return toString.call(obj) == '[object Array]';};