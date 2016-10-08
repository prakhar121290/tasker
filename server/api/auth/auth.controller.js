const jwt = require('jsonwebtoken');

const secret = '29ntuhaueohtni.c';

function generateToken(sub, callback) {
  callback(null, jwt.sign({sub:sub},secret));
}

function verifyToken(token, callback) {
  jwt.verify(token, secret, callback);
}

module.exports = {
  generateToken: generateToken
}
