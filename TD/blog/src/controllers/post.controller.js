const postService = require('../services/post.service');
const res = require('../../configs/response.config');

const getAll = async (request, response, next) => {

    const posts = await postService.getAll();
    if (!posts.error) {

        return response.json(
            res.success('All posts', posts.data)
        );
    }

    return response.status(401).json(
        res.error(posts.data, 'ERROR', 401)
    );
}

const search = async (request, response, next) => {

    const title = request.query?.q;
    if (title) {

        const posts = await postService.findByTitle(title);
        if (!posts.error) {

            return response.json(
                res.success('All posts', posts.data)
            );
        }
    }

    return response.status(401).json(
        res.error(posts.data ?? "Search query not found", 'ERROR', 401)
    );
}

const getOne = async (request, response, next) => {

    const id = request.params?.id;
    if(id) {

        const find = await postService.findById(id);
        if (!find.error) {

            return response.json(
                res.success('Article content', find.data)
            );
        }
    }

    return response.status(401).json(
        res.error(posts.data, 'ERROR', 401)
    );
}

const getAllByUserId = async (request, response, next) => {

    const author_id = request.user_id;
    const posts = await postService.getAll({ "author": author_id });
    if (!posts.error) {

        return response.json(
            res.success('All posts by author', posts.data)
        );
    }

    return response.status(401).json(
        res.error(posts.data, 'ERROR', 401)
    );
}

const create = async (request, response, next) => {

    const data = request.body;
    data.author = request.user_id;
    const result = await postService.create(data);
    if (!result.error) {

        return response.status(201).json(
            res.success('Article created', result.data, 201)
        )
    }

    return response.status(422).json(
        res.error(result.data)
    );
}

module.exports = { getAll, search, getOne, getAllByUserId, create };