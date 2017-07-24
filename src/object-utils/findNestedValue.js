import { isObject, isString, isEmptyObject, stringHasValue, hasValue, getValueFromObject } from '../utils/utils';

function findNestedValue(object, keyPath, option){
    if (!object || !keyPath){
        let error = !object ? 'object of undefined' : 'keyPath of undefined';
        throw error;
    }

    if (!isObject(object)){
        let error = 'object type must be an object not the ' + typeof object;
        throw error;
    }

    if (!isString(keyPath)){
        let error = 'keyPath type must be string not the ' + typeof keyPath;
        throw error;
    }

    if (isEmptyObject(object)){
        let error = 'empty object not allowed and didn"t get value from empty object of your keyPath ' + keyPath;
        throw error;
    }

    if (!stringHasValue(keyPath, '.')){
        if (option.type === 'SET_VALUE'){
            object[keyPath] = option.value;
            return;
        }else if (option.type === 'GET_VALUE'){
            if (hasValue(object, keyPath)){
                return getValueFromObject(object, keyPath);
            }else{
                let error = 'there is no value from your keyPath ' + keyPath;
                throw error;
            }
        }
    }

    let keys = keyPath.split('.');
    let key = keys[0];
    let checkedPath = arguments[3] ? arguments[3] + '.' + key : key;
    keys.splice(0, 1);
    keys = keys.join('.');
    let value = getValueFromObject(object, key);

    if (value){
        if (isObject(value)){
            return findNestedValue(value, keys, option, checkedPath);
        }else{
            if (option.type === 'SET_VALUE'){
                object[key] = option.value;
                return;
            }else if (option.type === 'GET_VALUE'){
                return value;
            }
        }
    }else{
        if (keys !== ''){
            let error = checkedPath + ' of undefined';
            throw error;
        }
    }
}

export default findNestedValue;
