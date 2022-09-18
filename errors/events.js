// ERRORES TABLA EVENTOS

module.exports = {
    400: {
        statusCode: 400,
        error: new Error("Something went wrong"),
    },
    401: {
        statusCode: 401,
        error: new Error("Error while removing event"),
    },
    402: {
        statusCode: 402,
        error: new Error("Event not found"),
    },
    403: {
        statusCode: 403,
        error: new Error("Error updating event"),
    },
    404: {
        statusCode: 404,
        error: new Error("Duplicated event"),
    }
};