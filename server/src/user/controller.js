const service = require('./service');

module.exports = {
    new: async () => {
        try {
            let user = req.body;
            user = await service.registerUser(user);
            return res.status(201).json({data: user});
        } catch (error) {
            next(error);
        }
    },
    login : async () => {
        try {
            const credentials = req.body;
            const authToken = await loginUser(credentials);
            return res.status(200).json({data: authToken});
        } catch (error) {
            next(error)
        }
    },
    resetPassword: async () => {
        
    },
    updatePassword: async () => {
        
    },
    getSingle: async () => {try {
        
            const userId = req.params.id;
            const user = await service.retrieveUser(userId);
    } catch (error) {
        next(error);
    }
    }
}