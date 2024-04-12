const authService = require('../services/auth.service');

const register = async (request, response, next) => {

    const create = await authService.register(request.body);
    if (!create.error) {
        return response.status(201).json({
            status: 'Created',
            status_code: 201,
            message: 'User created successfully'
        });
    }

    return response.status(422).json({
        status: 'Body Error',
        status_code: 422,
        message: 'Invalid Request Body',
        data: body
    });
};

const login = async (request, response, next) => {

    const { email, password } = request.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    console.log(user);
    if (user) {

        const compare = await compareHash(password, user.password);
        console.log(compare, password, user.password);
        if (compare) {

            console.log("Login Okay");

            return response.status(200).json({
                status: 'OK',
                status_code: 200,
                message: 'Login successful',
                data: { token: generateToken(user._id) }
            });
        }
    }

    return response.status(422).json({
        status: 'Invalid Credentials',
        status_code: 422,
        message: 'Invalid Credentials'
    });
};

module.exports = { register, login };