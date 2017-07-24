import { isObject } from '../utils/utils';

const deepValues = {};

function searchByKey(object, key){
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
                searchByKey(object[objectKey], key, path)
            }
        }
    })
    return deepValues;
}

export default searchByKey;
