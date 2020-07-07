const jwt = require('jsonwebtoken');

const secret = 'dGVzdGVqc29ud2VidG9rZW4xMjM0NTZsaXN0YS12ZWljdWxv';

function signX(payload){
    jwt.sign(payload, secret, { expiresIn: 86400 })
}

function verifyX(token){
    jwt.verify(token, secret)
}

// const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 })
// const verify = token => jwt.verify(token, secret)

module.exports = jwt