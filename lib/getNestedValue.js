'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _findNestedValue = require('./findNestedValue');

var _findNestedValue2 = _interopRequireDefault(_findNestedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNestedValue(object, keyPath) {
    var option = {
        type: 'GET_VALUE'
    };
    return (0, _findNestedValue2.default)(object, keyPath, option);
}

exports.default = getNestedValue;