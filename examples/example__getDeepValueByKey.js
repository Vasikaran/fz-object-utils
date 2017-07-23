const {getDeepValuesByKey} = require('../lib/index');

console.log(getDeepValuesByKey);


var obj = {
    name: 'Vasi'
}

var key = 'name';

console.log(getDeepValuesByKey(obj, key));

obj.users = {
    user1: {
        name: 'ravi',
        friend: {
            name: 'friend1'
        }
    },
    user2: {
        name: 'suresh',
        friend: {
            name: 'friend2'
        }
    },
    user3: {
        name: 'aravinth',
        friend: {
            name: 'friend3'
        }
    }
}

console.log(getDeepValuesByKey(obj, key));
