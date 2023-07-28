const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }],
    spaceAdmin: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }]
},
    { timestamps: true }
);

spaceSchema.pre("save", async function (next) {
    this.spaceAdmin = this.members[0];
});

const Space = mongoose.model('space', spaceSchema);

module.exports = Space;