const errorHandler = (err, req, res, next) => {
    let message = err.message;
    let statusCode;

    // clg for dev
    console.log(err);

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        message = `Bootcamp not found with id of ${err.value}`;
        statusCode = 404;
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        message = `Duplicate field value entered`;
        statusCode = 400;
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        message = Object.values(err.errors).map((val) => val.message);
        statusCode = 404;
    }

    res.status(statusCode || 500).json({
        success: false,
        error: message || 'Server Error',
    });
};

module.exports = errorHandler;
