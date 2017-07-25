import { isString, isNumber, isObject, isArray } from '../utils/utils';
import errorHandling from './errorHandling';

let comparedObject = {};

function compareTwoObjects(object1, object2, object1Key, object2Key){
    let obj1Keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    let commonObj = {};
    let keys = obj1Keys.length !== 0 ? obj1Keys : obj2Keys;
    keys.forEach(key=>{
        let obj1Data = object1[key];
        let index = obj2Keys.indexOf(key);
        let obj2Data = undefined;
        if (index !== -1){
            obj2Data = object2[key];
            obj2Keys.splice(index, 1);
        }
        let tempObj = {};
        if (isString(obj1Data) || isNumber(obj1Data)){
            tempObj[object1Key] = obj1Data;
        }
        if (isString(obj2Data) || isNumber(obj1Data)){
            tempObj[object2Key] = obj2Data;
        }
        if (isObject(obj1Data) && isObject(obj2Data)){
            tempObj[object1Key] = tempObj[object2Key] = compareTwoObjects(obj1Data, obj2Data, object1Key, object2Key);
        }
        if (isArray(obj1Data), isArray(obj2Data)){
            tempObj[object1Key] = obj1Data;
            tempObj[object2Key] = obj2Data;
        }
        tempObj['difference'] = findDifference(obj1Data, obj2Data);
        commonObj[key] = tempObj;
    })
    if (obj2Keys.length !== 0){
        let newObj = {};
        obj2Keys.forEach(obj2Key=>{
            newObj[obj2Key] = object2[obj2Key];
        })
        commonObj = Object.assign(commonObj, compareTwoObjects({}, newObj, object2Key, object1Key));
    }
    return commonObj;
}

function compareObjects(object1, object2, options = {}){
    if (errorHandling(object1) && errorHandling(object2)){
        let comparedObject = {};
        let { object1Key = 'obj1', object2Key = 'obj2' } = options;
        let obj1Keys = Object.keys(object1);
        let obj2Keys = Object.keys(object2);
        let keys = obj1Keys.length !== 0 ? obj1Keys : obj2Keys;
        keys.forEach(key=>{
            let obj1Data = object1[key];
            let obj2Data = undefined;
            let index = obj2Keys.indexOf(key);
            if (index !== -1){
                obj2Data = object2[key];
                obj2Keys.splice(index, 1);
            }
            if (isObject(obj1Data) || isObject(obj2Data)){
                comparedObject[key] = compareTwoObjects(obj1Data, obj2Data, object1Key, object2Key);
            }else{
                let tempObj = {};
                tempObj[object1Key] = obj1Data;
                tempObj[object2Key] = obj2Data;
                tempObj['difference'] = findDifference(obj1Data, obj2Data);
                comparedObject[key] = tempObj;
            }
        })
        if (obj2Keys.length !== 0){
            let newObj = {};
            obj2Keys.forEach(obj2Key=>{
                newObj[obj2Key] = object2[obj2Key];
            })
            comparedObject = Object.assign(comparedObject, compareObjects({}, newObj, object2Key, object1Key));
        }
        return comparedObject;
    }
}

function findDifference(data1, data2){
    if (!data1 || !data2){
        return undefined;
    }
    if (isNumber(data1)){
        data1 = Number(data1);
    }
    if (isNumber(data2)){
        data2 = Number(data2);
    }
    let data1Type = typeof data1;
    let data2Type = typeof data2;
    if (data1Type === 'number' && data2Type === 'number'){
        return data1 - data2;
    }else{
        return '-none-';
    }
}

export default compareObjects;
