import { isString, isNumber, isObject, isArray } from '../utils/utils';

function compareTwoObjects(object1, object2, object1Key, object2Key){
    let obj1Keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    let commonObj = {};
    obj1Keys.forEach(obj1Key=>{
        let obj1Data = object1[obj1Key];
        let index = obj2Keys.indexOf(obj1Key);
        let obj2Data = undefined;
        if (index !== -1){
            obj2Data = object2[obj1Key];
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
        commonObj[obj1Key] = tempObj;
    })
    if (obj2Keys.length !== 0){
        let newObj = {};
        obj2Keys.forEach(obj2Key=>{
            newObj[obj2Key] = object2[obj2Key];
        })
        commonObj = Object.assign(commonObj, compareTwoObjects(newObj, {}, object2Key, objectKey));
    }
    return commonObj;
}

function compareObjects(object1, object2, options = {}){
    let comparedObject = {};
    let { object1Key = 'obj1', object2Key = 'obj2' } = options;
    let obj1Keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    obj1Keys.forEach(obj1Key=>{
        let obj1Data = object1[obj1Key];
        let obj2Data = undefined;
        let index = obj2Keys.indexOf(obj1Key);
        if (index !== -1){
            obj2Data = object2[obj1Key];
            obj2Keys.splice(index, 1);
        }
        if (isObject(obj1Data)){
            comparedObject[obj1Key] = compareTwoObjects(obj1Data, obj2Data, object1Key, object2Key);
        }else{
            obj2Keys.splice(index, 1);
            let tempObj = {};
            tempObj[object1Key] = obj1Data;
            tempObj[object2Key] = obj2Data;
            tempObj['difference'] = findDifference(obj1Data, obj2Data);
            comparedObject[obj1Key] = tempObj;
        }
    })
    if (obj2Keys.length !== 0){
        let newObj = {};
        obj2Keys.forEach(obj2Key=>{
            newObj[obj2Key] = object2[obj2Key];
        })
        commonObj = Object.assign(commonObj, compareObjects(newObj, {}, object2Key, objectKey));
    }
    return comparedObject;
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
