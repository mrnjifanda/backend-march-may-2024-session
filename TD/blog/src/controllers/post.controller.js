const getAll = async (request, response, next) => {

    return response.json({ "title": "All Posts" });
}

module.exports = { getAll };