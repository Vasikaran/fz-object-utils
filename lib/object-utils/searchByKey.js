'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utils/utils');

var _errorHandling = require('./errorHandling');

var _errorHandling2 = _interopRequireDefault(_errorHandling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepValues = {};

function searchByKey(object, key) {
    if ((0, _errorHandling2.default)(object, key)) {
        var keys = Object.keys(object);
        var keyPath = arguments[2] ? arguments[2] : '';
        if (keys.indexOf(key) !== -1) {
            if (keyPath !== '') {
                keyPath += '.';
            }
            deepValues[keyPath + key] = object[key];
        }

        keys.forEach(function (objectKey) {
            if (object[objectKey]) {
                var path = keyPath;
                if ((0, _utils.isObject)(object[objectKey])) {
                    if (path !== '' && !path.endsWith('.')) {
                        path += '.';
                    }
                    path += objectKey;
                    searchByKey(object[objectKey], key, path);
                }
            }
        });
        return deepValues;
    }
}

exports.default = searchByKey;