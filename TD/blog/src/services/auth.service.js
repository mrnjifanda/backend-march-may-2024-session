const User = require('../models/User');
const bcryptConfig = require('../../configs/bcrypt.config');
const jwtConfig = require('../../configs/jwt.config');

const mailService = require('./mail.service');

class AuthService {

    generateRamdom(length) {

        return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    }

    async register(data) {

        try {

            const hashPassword = bcryptConfig.hash(data.password);
            data.password = hashPassword;
            data.email = data.email.toLowerCase();
            data.username = data.username.toLowerCase();

            const user = new User(data);
            const otp = this.generateRamdom(5);
            user.is_confirm_email = otp;

            await user.save();

            const content = `
                Welcom ${data.username}

                Use thi code to confirm your email address: ${otp}
            `;
            await mailService.send(data.email, 'Verify your email address', content);
            return { error: false, data: user };
        } catch (error) {

            return { error: true, data: error.message };
        }
    }
    async login(email, password) {

        try {

            const user = await User.findOne({ email: email });
            if (user && user.is_confirm_email === "confirmed") {
            
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

    async confirmEmail(email, code) {

        try {

            const user = await User.findOne({ email: email, is_confirm_email: code });
            if (user) {

                user.is_confirm_email = "confirmed";
                user.save();
                await mailService.send(email, 'Welcom on Seven Blog', 'Your email address has been successfully confirmed');
                return { error: false, data: 'email address has been successfully confirmed' };
            }

            return { error: true, data: 'Invalid code or email' };
        } catch (error) {

            console.log(error);
            return { error: true, data: 'Invalid code or email' };
        }
    }
}

module.exports = new AuthService();