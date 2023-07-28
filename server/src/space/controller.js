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
        } catch (error) {
            next(error);
        }

    },
    addMember: async (req, res, next) => {
        try {

        } catch (error) {
            next(error);
        }

    },
    removeMember: async (req, res, next) => {
        try {

        } catch (error) {
            next(error);
        }

    },
    delete: async (req, res, next) => {
        try {

        } catch (error) {
            next(error);
        }

    },
}