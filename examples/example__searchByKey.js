const {searchByKey} = require('../lib/index');

var obj = {
    name: 'Vasi'
}

var key = 'name';

console.log(searchByKey(obj, key));

/*
output,
    {
        'name': 'Vasi'
    }
*/

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

console.log(searchByKey(obj, key));


/*
output,
    {
        'name': 'Vasi',
        'users.user1.name': 'ravi',
        'users.user1.friend.name': 'friend1',
        'users.user2.name': 'suresh',
        'users.user2.friend.name': 'friend2',
        'users.user3.name': 'aravinth',
        'users.user3.friend.name': 'friend3' 
    }
*/
