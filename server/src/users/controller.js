const service = require('./service');

module.exports = {
    new: async () => {
        try {
            let user = req.body;
            user = await service.registerUser(user);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    },
    login : async () => {
        
    },
    resetPassword: async () => {
        
    },
    changePassword: async () => {
        
    },
    getSingle: async () => {try {
        
            const userId = req.params.id;
            const user = await service.retrieveUser(userId);
    } catch (error) {
        next(error);
    }
    }
}