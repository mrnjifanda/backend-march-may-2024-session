const { Schema, model } = require('mongoose');

const userSchema = {
    email: { type: String, require: true },
    username: { type: String, require: true, maxLength: 10, minLength: 4 },
    fullName: { type: String, require: true },
    password: { type: String, require: true },
    is_confirm_email: { type: String, require: false, default: null },
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, require: false }
};

const User = model('user', userSchema);

module.exports = User;
