const AppError = require('../common/app-error');
const service = require('./service');

module.exports = {
    new: async (req, res, next) => {
        try {
            let user = req.body;
            await service.registerUser(user);
            res.redirect('/login')
        } catch (error) {
            next(error);
        }
    },
    resetPassword: async (req, res, next) => {

    },
    updatePassword: async (req, res, next) => {

    },
    logout: async (req, res, next) => {
        try {
            req.logout((error) => {
                if (error) throw new AppError(500, error)
            });
            res.redirect('/');
        } catch (error) {
            next(error)
        }
    }
}