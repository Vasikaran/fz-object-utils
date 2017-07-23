'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var deepValues = {};

function getDeep(object, key) {
    if (!object || !key) {
        var error = !object ? 'object of undefined' : 'key of undefined';
        throw error;
    }

    if (!(0, _utils.isObject)(object)) {
        var _error = 'object type must be an object not the ' + (typeof object === 'undefined' ? 'undefined' : _typeof(object));
        throw _error;
    }

    if (!(0, _utils.isString)(key)) {
        var _error2 = 'key type must be string not the ' + (typeof key === 'undefined' ? 'undefined' : _typeof(key));
        throw _error2;
    }

    if ((0, _utils.isEmptyObject)(object)) {
        var _error3 = 'empty object not allowed and didn"t get value from empty object of your key ' + key;
        throw _error3;
    }

    var objectKeys = Object.keys();
    if ((0, _utils.hasValue)(object, key)) {
        var newObj = {
            key: object[key]
        };
        deepValues.push(newObj);
    }
    objectKeys.forEach(function (objectKey) {});
}