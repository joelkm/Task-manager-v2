const AppError = require("../common/app-error");
const passport = require("../config/auth-config");
const User = require("./model");

module.exports = {
    registerUser: async (data) => {
        if(await User.findOne({email: data.email})) throw new AppError(400, "User already exists");

        const userInfo = await User.create({ ...data });
        if(!userInfo) throw new AppError(400, "User was not created");
        return {
            user: {
                name: userInfo.name,
                email: userInfo.email,
                isAdmin: userInfo.isAdmin
            }
        }
    },
    // TO - DO: NO USE
    loginUser: async (data) => {

    },
    retrieveUser: async (userId) => {
        return await User.findById(userId);
    },
}