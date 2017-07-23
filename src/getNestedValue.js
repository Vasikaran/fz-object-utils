import findNestedValue from './findNestedValue';

function getNestedValue(object, keyPath){
    let option = {
        type: 'GET_VALUE'
    }
    return findNestedValue(object, keyPath, option);
}

export default getNestedValue;
