const service = require('./service');

module.exports = {
    new: async (req, res, next) => {
        try {
            const spaceInfo = req.body;

            const space = await service.openSpace(spaceInfo);

            res.redirect(`/${space._id}`);
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const spaceInfo = req.body;

            const space = await service.updateSpace(spaceInfo)

            res.status(200).json({
                ...space
            });
        } catch (error) {
            next(error);
        }

    },
    addMembers: async (req, res, next) => {
        try {
            const spaceId = req.params.id;
            const guests = req.body;

            const added = await service.includeMembers(spaceId, guests);

            res.status(200).json({
                ...added
            })
        } catch (error) {
            next(error);
        }
    },
    /* WHEN E-MAIL IS IMPLEMENTED

    inviteMember: async (req, res, next) => {
        try {
            const spaceId = req.params.id;
            const guests = req.body;

            await service.createSpaceInvites(spaceId, guests);
            res.status
        } catch (error) {
            next(error);
        }

    },
    */
    removeMember: async (req, res, next) => {
        try {
            const spaceId = req.params.id;
            const { memberId } = req.body;

            const removed = await service.excludeMember(spaceId, memberId);

            res.status(200).json({
                ...removed
            })
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const spaceId = req.params.id;

            const deleted = await service.deleteSpace(spaceId);

            res.status(200).json({
                ...deleted
            })
        } catch (error) {
            next(error);
        }
    },
}