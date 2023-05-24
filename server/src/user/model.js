const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      }
    },
    { timestaps: true }
);

userSchema.methods.matchesPassword = async (sentPassword, truePassword) => {
    return await bcrypt.compare(sentPassword, truePassword);
};
  
userSchema.pre("save", async (next) => {
    if (!this.isModified) {
        next();
    }

    this.password = await bcrypt.hash(password, 10);
});

const User = mongoose.model('user', userSchema);

module.exports = User;