const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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

userSchema.methods.matchesPassword = async function (sentPassword) {
    return await bcrypt.compare(sentPassword, this.password);
};

userSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model('user', userSchema);

module.exports = User;