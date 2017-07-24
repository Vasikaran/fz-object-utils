'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('../utils/utils');

function compareTwoObjects(object1, object2, object1Key, object2Key) {
    var obj1Keys = Object.keys(object1);
    var obj2Keys = Object.keys(object2);
    var commonObj = {};
    obj1Keys.forEach(function (obj1Key) {
        var obj1Data = object1[obj1Key];
        var index = obj2Keys.indexOf(obj1Key);
        var obj2Data = undefined;
        if (index !== -1) {
            obj2Data = object2[obj1Key];
            obj2Keys.splice(index, 1);
        }
        var tempObj = {};
        if ((0, _utils.isString)(obj1Data) || (0, _utils.isNumber)(obj1Data)) {
            tempObj[object1Key] = obj1Data;
        }
        if ((0, _utils.isString)(obj2Data) || (0, _utils.isNumber)(obj1Data)) {
            tempObj[object2Key] = obj2Data;
        }
        if ((0, _utils.isObject)(obj1Data) && (0, _utils.isObject)(obj2Data)) {
            tempObj[object1Key] = tempObj[object2Key] = compareTwoObjects(obj1Data, obj2Data, object1Key, object2Key);
        }
        if ((0, _utils.isArray)(obj1Data), (0, _utils.isArray)(obj2Data)) {
            tempObj[object1Key] = obj1Data;
            tempObj[object2Key] = obj2Data;
        }
        tempObj['difference'] = findDifference(obj1Data, obj2Data);
        commonObj[obj1Key] = tempObj;
    });
    if (obj2Keys.length !== 0) {
        var newObj = {};
        obj2Keys.forEach(function (obj2Key) {
            newObj[obj2Key] = object2[obj2Key];
        });
        commonObj = Object.assign(commonObj, compareTwoObjects(newObj, {}, object2Key, objectKey));
    }
    return commonObj;
}

function compareObjects(object1, object2) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var comparedObject = {};
    var _options$object1Key = options.object1Key,
        object1Key = _options$object1Key === undefined ? 'obj1' : _options$object1Key,
        _options$object2Key = options.object2Key,
        object2Key = _options$object2Key === undefined ? 'obj2' : _options$object2Key;

    var obj1Keys = Object.keys(object1);
    var obj2Keys = Object.keys(object2);
    obj1Keys.forEach(function (obj1Key) {
        var obj1Data = object1[obj1Key];
        var obj2Data = undefined;
        var index = obj2Keys.indexOf(obj1Key);
        if (index !== -1) {
            obj2Data = object2[obj1Key];
            obj2Keys.splice(index, 1);
        }
        if ((0, _utils.isObject)(obj1Data)) {
            comparedObject[obj1Key] = compareTwoObjects(obj1Data, obj2Data, object1Key, object2Key);
        } else {
            obj2Keys.splice(index, 1);
            var tempObj = {};
            tempObj[object1Key] = obj1Data;
            tempObj[object2Key] = obj2Data;
            tempObj['difference'] = findDifference(obj1Data, obj2Data);
            comparedObject[obj1Key] = tempObj;
        }
    });
    if (obj2Keys.length !== 0) {
        var newObj = {};
        obj2Keys.forEach(function (obj2Key) {
            newObj[obj2Key] = object2[obj2Key];
        });
        commonObj = Object.assign(commonObj, compareObjects(newObj, {}, object2Key, objectKey));
    }
    return comparedObject;
}

function findDifference(data1, data2) {
    if (!data1 || !data2) {
        return undefined;
    }
    if ((0, _utils.isNumber)(data1)) {
        data1 = Number(data1);
    }
    if ((0, _utils.isNumber)(data2)) {
        data2 = Number(data2);
    }
    var data1Type = typeof data1 === 'undefined' ? 'undefined' : _typeof(data1);
    var data2Type = typeof data2 === 'undefined' ? 'undefined' : _typeof(data2);
    if (data1Type === 'number' && data2Type === 'number') {
        return data1 - data2;
    } else {
        return '-none-';
    }
}

exports.default = compareObjects;