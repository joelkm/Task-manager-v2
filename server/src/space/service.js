const AppError = require('../common/app-error');
const Space = require('./model');

module.exports = {
    openSpace: async (spaceInfo) => {
        const space = await Space.create({
            ...spaceInfo
        })
        if (!space) throw new AppError(400, "The space was not created");

        return space;
    },
    retrieveUserSpaces: async (userId) => {
        const spaces = await Space.find({ members: { $elemMatch: { $eq: userId } } });
        if (spaces.length == 0) throw new AppError(404, "No spaces found");

        return spaces;
    },
    updateSpace: async (spaceId, name) => {
        const space = await Space.findByIdAndUpdate(spaceId, {
            name: name
        }, { new: true })
            .populate("members", "-password")
            .populate("spaceAdmin", "-password");
        if (!space) throw new AppError(400, "Space was not updated");

        return space;
    },
    includeMembers: async (spaceId, guests) => {

    },
    // createSpaceInvites: async (spaceId, guests)
    excludeMember: async (spaceId, memberId) => {

    },
    deleteSpace: async (spaceId) => {
        const deleted = await Space.findByIdAndDelete(spaceId);
        if (!deleted) throw new AppError(400, "Space was not deleted");

        return deleted;
    }
}