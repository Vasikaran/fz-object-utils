import { isObject, isString, isEmptyObject, stringHasValue, hasValue, getValueFromObject } from './utils';

const deepValues = {};

function getDeepValuesByKey(object, key){
    let keys = Object.keys(object);
    let keyPath = arguments[2] ? arguments[2] : '';
    if (keys.indexOf(key) !== -1){
        if (keyPath !== ''){
            keyPath += '.';
        }
        deepValues[keyPath + key] = object[key];
    }

    keys.forEach(objectKey=>{
        if(object[objectKey]){
            let path = keyPath;
            if(isObject(object[objectKey])){
                if (path !== '' && !path.endsWith('.')){
                    path += '.';
                }
                path += objectKey;
                getDeepValuesByKey(object[objectKey], key, path)
            }
        }
    })
    return deepValues;
}

export default getDeepValuesByKey;
