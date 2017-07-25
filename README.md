Fz Object Utils
=======================

This library using for access JavaScript objects as well.

## Installation

You can install the fz-object-utils from npm by running.    

```sh
npm install --save fz-object-utils
```

## Usage

```js
var { getNestedValue, setNestedValue, searchByKey, compareObjects, objectIterator } = require('fz-object-utils');

Params -  -none-

Return - instance object

Return type - object

```

## Methods

### getNestedValue
`Params -  object, keyPath `

`Params type - object : object, keyPath : string`

`Return - value of your keyPath`

```js
// Usage

getNestedValue(object, keyPath);
```

If you pass the object and keyPath to this method, it will returns the value to that keyPath.

[getNestedValue Example](./examples/example__getNestedValues.js)

### setNestedValue
`Params -  object, keyPath `

`Params type - object : object, keyPath : string`

`Return - value of your keyPath`

```js
// Usage

setNestedValue(object, keyPath);
```

If you pass the object and keyPath to this method, it will update the value to that keyPath.

[setNestedValue Example](./examples/example__setNestedValue.js)

### searchByKey
`Params -  object, key `

`Params type - object : object, key : string`

`Return - value of your key`

```js
// Usage

searchByKey(object, key);
```

If you pass the object and key to this method, it will returns all of values of your key as object.

[searchByKey Example](./examples/example__searchByKey.js)

compareObjects

### compareObjects
`Params -  object1, object2 `

`Params type - object1 : object, object2 : object`

`Return - compared object`

```js
// Usage

compareObjects(object1, object2);
```

If you pass the two objects to this method, it will compare the two objects and retrrns the compared object.

[compareObjects Example](./examples/example__compareObjects.js)

### objectIterator
`Params -  object `

`Params type - object : object`

`Return - object has next method`

```js
// Usage

objectIterator(object);
```

It use to iterate your object. You can initialize this method by pass an object, then you will be iterate your object.


[objectIterator Example](./examples/example__objectIterator.js)


## Conclusion

If you find any errors in this, please let me know about it by using raise issue.
