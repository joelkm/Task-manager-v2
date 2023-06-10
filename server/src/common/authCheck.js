const AppError = require("./app-error");

module.exports = {
    checkLoged: (req, res, next) => {
        if(req.user) next();
        else next(new AppError(401, "User is not logged"));
    },
    checkNotLoged: (req, res, next) => {
        if(!req.user) next();
        else next(new AppError(401, "User is already logged"));
    }
}