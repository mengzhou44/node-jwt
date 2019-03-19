const createError= (message, statusCode)=> {

    let error = new Error(message);
    error.statusCode = statusCode;

    return error;
}

module.exports = {createError}