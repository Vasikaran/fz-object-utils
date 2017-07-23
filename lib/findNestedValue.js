'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

function findNestedValue(object, keyPath, option) {
    if (!object || !keyPath) {
        var error = !object ? 'object of undefined' : 'keyPath of undefined';
        throw error;
    }

    if (!(0, _utils.isObject)(object)) {
        var _error = 'object type must be an object not the ' + (typeof object === 'undefined' ? 'undefined' : _typeof(object));
        throw _error;
    }

    if (!(0, _utils.isString)(keyPath)) {
        var _error2 = 'keyPath type must be string not the ' + (typeof keyPath === 'undefined' ? 'undefined' : _typeof(keyPath));
        throw _error2;
    }

    if ((0, _utils.isEmptyObject)(object)) {
        var _error3 = 'empty object not allowed and didn"t get value from empty object of your keyPath ' + keyPath;
        throw _error3;
    }

    if (!(0, _utils.stringHasValue)(keyPath, '.')) {
        if (option.type === 'SET_VALUE') {
            object[keyPath] = option.value;
            return;
        } else if (option.type === 'GET_VALUE') {
            if ((0, _utils.hasValue)(object, keyPath)) {
                return (0, _utils.getValueFromObject)(object, keyPath);
            } else {
                var _error4 = 'there is no value from your keyPath ' + keyPath;
                throw _error4;
            }
        }
    }

    var keys = keyPath.split('.');
    var key = keys[0];
    var checkedPath = arguments[3] ? arguments[3] + '.' + key : key;
    keys.splice(0, 1);
    keys = keys.join('.');
    var value = (0, _utils.getValueFromObject)(object, key);

    if (value) {
        if ((0, _utils.isObject)(value)) {
            return findNestedValue(value, keys, option, checkedPath);
        } else {
            if (option.type === 'SET_VALUE') {
                object[key] = option.value;
                return;
            } else if (option.type === 'GET_VALUE') {
                return value;
            }
        }
    } else {
        if (keys !== '') {
            var _error5 = checkedPath + ' of undefined';
            throw _error5;
        }
    }
}

exports.default = findNestedValue;