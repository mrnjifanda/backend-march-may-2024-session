const authService = require('../services/auth.service');
const res = require('../../configs/response.config');

const register = async (request, response, next) => {

    const create = await authService.register(request.body);
    if (!create.error) {

        return response.status().json(
            res.success('Register succefully', null, 'CREATED', 201)
        );
    }

    return response.status(422).json(
        res.error(create.data)
    );
}

const login = async (request, response, next) => {

    const body = request.body;
    const auth = await authService.login(body.email, body.password);
    if (!auth.error) {

        return response.status(200).json(
            res.success('Login succefully', auth.data)
        );
    }

    return response.status(401).json(
        res.error(auth.data, null, 'INVALID_CREDENTIALS', 401)
    );
}

const confirmEmail = async (request, response, next) => {

    const body = request.body;
    const confirm = await authService.confirmEmail(body.email, body.code);
    if (!confirm.error) {

        return response.json(res.success(confirm.data));
    }

    return response.status(422).json(res.error(confirm.data));
}

module.exports = { register, login, confirmEmail };
