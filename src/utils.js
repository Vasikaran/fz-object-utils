let isObject = (object)=>{
    return object.toString() === '[object Object]' ? true : false;
}

let isEmptyObject = (object)=>{
    return JSON.stringify(object) === '{}' ? true : false;
}

let isArray = (array)=>{
    return Array.isArray(array) ? true : false;
}

let isString = (string)=>{
    return typeof string === 'string' ? true : false;
}

let isNumber = (number)=>{
    return typeof number === 'number' ? true : false;
}

let stringHasValue = (string, value)=>{
    return string.search(value) !== -1 ? true : false;
}

let hasValue = (object, key)=>{
    return object[key] ? true : false;
}

let getValueFromObject = (object, key)=>{
    return object[key];
}

export {
    isObject,
    isEmptyObject,
    isArray,
    isString,
    isNumber,
    stringHasValue,
    hasValue,
    getValueFromObject
}
