const {getNestedValue} = require('../lib/index');

console.log(getNestedValue);

let obj = {
    name: undefined,
    age: 20
}
let key = 'name';

console.log(getNestedValue(obj, key));

obj.phoneNo = {
    primary: 1234567890,
    secondary: 0987654321
}

key = 'phoneNo.primary';

console.log(getNestedValue(obj, key));

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

console.log(getNestedValue(obj, key));

key = 'users.user1.address.streets.new';

console.log(getNestedValue(obj, key));
