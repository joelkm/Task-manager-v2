const service = require('./service');

module.exports = {
    new: async (req, res, next) => {
        try {
            let user = req.body;
            console.log(user);
            await service.registerUser(user);
            return res.redirect('/login')
        } catch (error) {
            next(error);
        }
    },
    // TO - DO: NO USE
    login : async (req, res, next) => {
        try {
            const credentials = req.body;
            const authToken = await loginUser(credentials);
            return res.status(200).json({data: authToken});
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
            req.logout();
            res.redirect(200, '/login')
        } catch (error) {
            next(error)
        }
    }
}