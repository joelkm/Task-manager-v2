const AppError = require('../common/app-error');
const service = require('./service');

module.exports = {
    new: async (req, res, next) => {
        try {
            let user = req.body;
            await service.registerUser(user);
            return res.redirect('/login')
        } catch (error) {
            next(error);
        }
    },
    // TO - DO: NO USE
    login : async (req, res, next) => {
        try {
            if(req.user = null) throw new AppError(401, 'Invalid email or password')
            res.redirect('/')
        } catch (error) {
            next(error)
        }
    },
    resetPassword: async (req, res, next) => {
        
    },
    updatePassword: async (req, res, next) => {
        
    },
    getSingle: async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await service.retrieveUser(userId);
    } catch (error) {
        next(error);
    }
    },
    logout: async (req, res, next) => {
        try {
            req.logout((error) => {
                if(error) throw new AppError(500, error)
            });
            res.redirect('/')
        } catch (error) {
            next(error)
        }
    }
}