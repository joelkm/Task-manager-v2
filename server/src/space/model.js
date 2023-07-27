const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
    name: { type: String },
    spaceAdmin: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
},
    { timestamps: true }
);

const Space = mongoose.model('space', spaceSchema);

module.exports = Space;