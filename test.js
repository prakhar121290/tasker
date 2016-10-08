const jwt = require('jsonwebtoken');

const token = jwt.sign({sub:'sagarpatke'},'shh');

console.log('GENERATED TOKEN: ', token);
