const bcrypt = require('bcrypt');

module.exports = {
    encryptPassword: async (password) => {
        return await bcrypt.hash(password, 10);
    },
    checkPassword: async (sentPassword, storedPassword) => {
        return await bcrypt.compare(sentPassword, storedPassword)
    }
}