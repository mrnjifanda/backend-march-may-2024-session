const User = require('../models/User');
const bcryptConfig = require('../../configs/bcrypt.config');
const jwtConfig = require('../../configs/jwt.config');

class AuthService {

    async register(data) {

        try {

            const hashPassword = bcryptConfig.hash(data.password);
            data.password = hashPassword;
            data.email = data.email.toLowerCase();
            data.username = data.username.toLowerCase();
            const user = new User(data);
            await user.save();
            return { error: false, data: user };
        } catch (error) {

            return { error: true, data: error.message };
        }
    }
    async login(email, password) {

        try {

            const user = await User.findOne({ email: email });
            if (user) {
            
                const comparePassword = bcryptConfig.compare(password, user.password);
                if (comparePassword === true) {

                    const token = jwtConfig.generateToken(user._id);
                    return { error: false, data: token };
                }
            }

            return { error: true, data: "Invalid Credentials" };
        } catch (error) {

            console.log(error.message);
            return { error: true, data: "Invalid Credentials" };
        }

    }
}

module.exports = new AuthService();