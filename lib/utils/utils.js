'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var isObject = function isObject(object) {
    return object.toString() === '[object Object]' ? true : false;
};

var isEmptyObject = function isEmptyObject(object) {
    return JSON.stringify(object) === '{}' ? true : false;
};

var isArray = function isArray(array) {
    return Array.isArray(array) ? true : false;
};

var isString = function isString(string) {
    return typeof string === 'string' ? true : false;
};

var isNumber = function isNumber(number) {
    return Number(number) ? true : false;
};

var stringHasValue = function stringHasValue(string, value) {
    return string.search(value) !== -1 ? true : false;
};

var hasValue = function hasValue(object, key) {
    return object[key] ? true : false;
};

var getValueFromObject = function getValueFromObject(object, key) {
    return object[key];
};

exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isArray = isArray;
exports.isString = isString;
exports.isNumber = isNumber;
exports.stringHasValue = stringHasValue;
exports.hasValue = hasValue;
exports.getValueFromObject = getValueFromObject;