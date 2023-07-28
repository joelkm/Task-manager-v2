const AppError = require('../common/app-error');
const User = require('../user/model');
const Space = require('./model');

async function userExists(userId) {
    const user = await User.findById(userId);
    if (user) return true;
    else return false;
}

async function userAlreadyMember(userId, spaceId) {
    const space = await Space.find({
        _id: spaceId,
        $and: { users: { $elemMatch: { $eq: userId } } }
    });
    if (space) return true;
    else return false;
}

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
    includeMember: async (spaceId, guestId) => {
        if (!await userExists(guestId)) throw new AppError(404, "Cannot add user: User does not exist");

        if (await userAlreadyMember(guestId, spaceId)) throw new AppError(400, "Cannot add user: Already member");

        const added = await Space.findByIdAndUpdate(
            spaceId,
            {
                $push: { members: guestId },
            },
            {
                new: true,
            })
            .populate("members", "-password")
            .populate("spaceAdmin", "-password");

        if (!added) throw new AppError(400, "User could not be added");

        return added;
    },
    // createSpaceInvites: async (spaceId, guests)
    excludeMember: async (spaceId, memberId, adminId) => {
        if (memberId == adminId) throw new AppError(400, "The admin cannot be kicked");

        if (!await userExists(memberId)) throw new AppError(404, "Cannot invite user: User does not exist");

        if (!await userAlreadyMember(memberId, spaceId)) throw new AppError(400, "Cannot invite user: Already member");

        const removed = await Space.findByIdAndUpdate(
            spaceId,
            {
                $pull: { members: memberId },
            },
            {
                new: true,
            })
            .populate("members", "-password")
            .populate("spaceAdmin", "-password");

        if (!removed) throw new AppError(400, "User could not be removed");

        return removed;
    },
    deleteSpace: async (spaceId) => {
        const deleted = await Space.findByIdAndDelete(spaceId);
        if (!deleted) throw new AppError(400, "Space was not deleted");

        return deleted;
    }
}