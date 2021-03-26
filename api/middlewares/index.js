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

export const isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.json({
            message: 'Нужна е верификация'
        });
    }

    next();
};
