const index = (request, response) => {
    return response.json({
        status: 'OK',
        status_code: 200,
        message: 'Welcom on Task API',
        data: {
            version: '1.0.0',
            author: 'Seven Academy',
            description: 'This is the API for the Task Management System'
        }
    });
};

module.exports = { index };