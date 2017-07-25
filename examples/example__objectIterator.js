const {objectIterator} = require('../lib/index');

var obj = {
    name: 'Vasi',
    age: 20
}

var iter = objectIterator(obj);

console.log(iter.next());
/*
output,
    { value: 'Vasi', done: false }

*/

console.log(iter.next());
/*
output,
    { value: 20, done: false }

*/

console.log(iter.next());
/*
output,
    { done: true }

*/
