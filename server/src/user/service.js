const AppError = require("../common/app-error");
const passport = require("../config/auth-config");
const { newUser, fetchUserBy } = require("./model");
const { encryptPassword } = require('./helpers/encrypt')

module.exports = {
    registerUser: async (data) => {
        data.password = await encryptPassword(data.password)
        if(!data.password) throw new AppError(400, "Error encrypting password");
        const user = await newUser(data);
        if(!user) throw new AppError(400, "User was not created");
        return user
    },
    // TO - DO: NO USE
    loginUser: async (data) => {

    },
    retrieveUser: async (userId) => {
        return await fetchUserBy("id", userId)
    },
}