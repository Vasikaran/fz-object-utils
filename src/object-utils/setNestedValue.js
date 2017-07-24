import findNestedValue from './findNestedValue';

function setNestedValue(object, keyPath, value){
    let option = {
        type: 'SET_VALUE',
        value: value
    }
    return findNestedValue(object, keyPath, option);
}

export default setNestedValue;
