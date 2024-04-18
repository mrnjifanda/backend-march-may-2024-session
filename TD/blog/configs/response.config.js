const response = (message, data, status, status_code) => {
    const object = {
        status,
        status_code,
        message
    };

    if (data) object['data'] = data;
    return object;
};

const success = (message, data = null, status = "OK", status_code = "200") => {

    return response(message, data, status, status_code);
};

const error = (message, data = null, status = "ERROR", status_code = "422") => {

    return response(message, data, status, status_code);
};

module.exports = { success, error };
