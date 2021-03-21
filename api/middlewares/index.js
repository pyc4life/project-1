export const globalErrorHandler = (err, req, res, next) => {

    const error = {
        message: err.message || 'UNEXPECTED ERROR',
        statusCode: err.code || 500,
    };

    console.log('Handler ERROR', err.message);

    res
        .status(error.statusCode)
        .json(error);
};
