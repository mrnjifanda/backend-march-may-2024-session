const { Schema, model } = require('mongoose');

const postSchema = {
    author: { type: Schema.Types.ObjectId, ref: 'user' },
    title: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    picture: { type: String, require: false },
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, require: false }
};

const Post = model('post', postSchema);

module.exports = Post;
