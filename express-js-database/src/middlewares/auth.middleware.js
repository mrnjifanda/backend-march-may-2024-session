const jwt = require('jsonwebtoken');

function verifyToken(token) {
    try {
        return jwt.verify(token, 'my-secret-key');
    } catch (error) {

        // console.log(error);
        return false;
    }
}

const auth = async (request, response, next) => {

    const header = request.header("Authorization");
    if (header) {
        const token = header.split(' ')[1];
        const verified = verifyToken(token);
        if (verified) {
            request.user_id = verified.id;
            next();
        } else {
            response.status(401).json({
                status: 'Unauthorized',
                status_code: 401,
                message: "Please login to access to this resource"
            })
        }
    } else {
        response.status(401).json({
            status: 'Unauthorized',
            status_code: 401,
            message: "Please login to access to this resource"
        })
    }
}

module.exports = { auth };