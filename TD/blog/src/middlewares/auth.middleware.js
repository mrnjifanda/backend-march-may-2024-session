const jwtConfig = require('../../configs/jwt.config');
const res = require('../../configs/response.config');

const verifyAuth = async (request, response, next) => {

    const authorization = request.headers.authorization;
    if (authorization && authorization?.startsWith('Bearer ')) {

        const token = authorization.split(' ')[1];
        const verify = jwtConfig.verifyToken(token);
        if (verify && verify?.id) {

            request.user_id = verify.id;
            next();
            return ;
        }
    }

    return response.status(401).json(
        res.error('Unauthorized, please login', null, 'UNAUTHORIZED', 401)
    );
};

module.exports = { verifyAuth };