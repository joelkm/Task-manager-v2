module.exports = async (res, result, statusCode, data) => {
    return res.status(statusCode).json({
        success: result,
        data: data
    });
}