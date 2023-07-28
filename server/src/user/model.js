const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
},
    { timestaps: true }
);

userSchema.methods.matchesPassword = async function (sentPassword) {
    return await bcrypt.compare(sentPassword, this.password);
};

userSchema.pre("save", async function (next) {
    if (!this.isModified) { // (?) Compare to chat -> refers to prevent this on update?
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model('user', userSchema);

module.exports = User;