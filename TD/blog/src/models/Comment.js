const { Schema, model } = require('mongoose');

const commentSchema = {
    author: { type: Schema.Types.ObjectId, ref: 'user' },
    post: { type: Schema.Types.ObjectId, ref: 'post' },
    content: { type: String, require: true },
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, require: false }
};

const Comment = model('comment', commentSchema);

module.exports = Comment;
