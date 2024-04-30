const Post = require('../models/Post');

class PostService {

    async getAll (where = {}) {

        try {

            const posts = await Post.find(where);
            return { error: false, data: posts };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }

    async findByTitle (search_value) {

        try {

            const find = await Post.find({ "title": {
                $regex: '.*' + search_value + '.*',
                $options: 'i'
            }});
            return { error: false, data: find };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }

    async findById (id) {

        try {

            const find = await Post.findById(id).populate({
                path: 'author',
                select: 'username -_id'
            });
            return { error: false, data: find };
        } catch (error) {
        
            console.log(error);
            return { error: true, data: error.message };
        }
    }

    async create (data) {

        try {

            const post = await Post.create(data);
            return { error: false, data: post };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }
}

module.exports = new PostService();
