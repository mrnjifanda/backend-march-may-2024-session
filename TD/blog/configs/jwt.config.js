const jwt = require('jsonwebtoken');

function generateToken(id, expiresIn = '24h') {
    return jwt.sign({id: id}, process.env.JWT_SECRET_KEY, {
        expiresIn
    });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {

        console.log(error);
        return false;
    }
}

module.exports = { generateToken, verifyToken };
