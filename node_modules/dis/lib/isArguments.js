var toString = require('./toString');

module.exports = function isArguments(obj){return toString.call(obj) == '[object Arguments]';};