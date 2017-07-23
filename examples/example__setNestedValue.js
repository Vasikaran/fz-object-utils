const {setNestedValue} = require('../lib/index');

let obj = {
    name: 'Vasi'
}
let key = 'name';

setNestedValue(obj, key, 'karan');

console.log(obj.name);

obj.phoneNo = {
    primary: 1234567890,
    secondary: 0987654321
}

key = 'phoneNo.primary';

setNestedValue(obj, key, 12121212);

console.log(obj.phoneNo.primary);

obj.users = {
    user1: {
        names: {
            firstName: 'Vasi',
            secondName: 'Karan'
        },
        address: {
            streets: {
                old: 'bharathiyar st',
                new: 'Main Road',
            }
        }
    }
}

key = 'users.user1.names.secondName';

setNestedValue(obj, key, 'Raina');

console.log(obj.users.user1.names.secondName);

key = 'users.user1.address.streets.new';

setNestedValue(obj, key, 'New street');

console.log(obj.users.user1.address.streets.new);
