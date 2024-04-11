const { Schema, model } = require('mongoose');

const userSchema = {
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    created_at: { type: Date, require: false, default: Date.now },
    updated_at: { type: Date, require: false, default: null }
};

const User = model('user', userSchema);

module.exports = User;
