const {compareObjects} = require('../lib/index');

var obj1 = {
    name: 'Vasi',
    age: '20'
}

var obj2 = {
    name: 'Karan',
    age: '19'
}

// console.log(compareObjects(obj1, obj2));

obj1.details = {
    fullName: 'Vasikaran',
    age: 20,
    number: [098, 765],
    wow: {
        ama: 'no'
    }
}

obj2.details = {
    fullName: 'Vasi Raina',
    age: 21,
    number: [123, 456],
    wow: {
        ama: 'yes'
    }
}

// console.log(compareObjects(obj1, obj2));


var newObj1 = {
    name: 'Vasi'
}

var newObj2 = {
    age: 20
}

console.log(compareObjects(newObj1, newObj2));
