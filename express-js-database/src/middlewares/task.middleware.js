const Task = require('../models/Task');

async function verifyCreateRequest (request, response, next) {

    const body = request.body;
    const errors = [];

    if (!body.name) {

        errors.push({ value: "name", message: "name is required"});
    } else {

        const findTask = await Task.findOne({ name: body.name });
        if (findTask) {

            errors.push({ value: "name", message: "name already exists"});
        }
    }

    if (!body.description) {
        errors.push({ value: "description", message: "description is required"});
    } else {
        const descriptionLength = body.description.length;
        if (descriptionLength < 5 || descriptionLength > 200) {
            errors.push({ value: "description", message: "description must be between 5 and 200 characters"});
        }
    }

    if (!body.due_date) {
        errors.push({ value: "due_date", message: "due_date is required"});
    } else {
        const currentDate = new Date();
        const dueDate = new Date(body.due_date);

        if (dueDate <= currentDate ) {

            errors.push({ value: "due_date", message: "due_date must be in the future"});
        }
    }

    if (errors.length === 0) {
        next();
    } else {

        return response.status(422).json({
            status: 'Form data error',
            status_code: 422,
            message: 'Name, Description and Due Date are required, please make sure send it.',
            errors: errors
        });
    }
}

module.exports = { verifyCreateRequest };