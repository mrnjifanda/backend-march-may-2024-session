const bcrypt = require('bcrypt');

function hash (password) {

    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
        return bcrypt.hashSync(password, salt);
    } catch (error) {

        console.log(error);
        return false;
    }
}

function compare (password, hash) {

    try {

        return bcrypt.compareSync(password, hash);
    } catch (error) {

        console.log(error);
        return false;
    }
}

module.exports = { hash, compare };
