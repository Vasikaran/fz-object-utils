'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _findNestedValue = require('./findNestedValue');

var _findNestedValue2 = _interopRequireDefault(_findNestedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setNestedValue(object, keyPath, value) {
    var option = {
        type: 'SET_VALUE',
        value: value
    };
    return (0, _findNestedValue2.default)(object, keyPath, option);
}

exports.default = setNestedValue;