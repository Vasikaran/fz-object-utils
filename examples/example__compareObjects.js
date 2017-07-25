const {compareObjects} = require('../lib/index');

var obj1 = {
    name: 'Vasi',
    age: '20'
}

var obj2 = {
    name: 'Karan',
    age: '19'
}

console.log(compareObjects(obj1, obj2));

/*
output,
    {
        name: {
            obj1: 'Vasi',
            obj2: 'Karan',
            difference: '-none-'
        },
        age: {
            obj1: '20',
            obj2: '20',
            difference: 1
        }
    }

*/

var newObj1 = {
    name: 'Vasi'
}

var newObj2 = {
    age: 20
}

console.log(compareObjects(newObj1, newObj2));


/*
output,
    {
        name: {
            obj1: 'Vasi',
            obj2: undefined,
            difference: '-none-'
        },
        age: {
            obj1: undefined,
            obj2: 20,
            difference: undefined
        }
    }

*/
