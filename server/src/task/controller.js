const service = require('./service');

module.exports = {
    new: async (req, res, next) => {
        try {
            let task = {
                author: req.user._id,
                space: req.params.spaceId,
                ...req.body
            };
            task = await service.addTask(task);

            res.status(201).json({
                ...task
            })
        } catch (error) {
            next(error)
        }
    },
    show: async (req, res, next) => {
        try {
            const spaceId = req.params.spaceId;

            const tasks = await service.getTasksFromSpace(spaceId);

            res.status(200).json({
                ...tasks
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const taskId = req.params.id;
            const task = req.body;

            const updated = await service.updateSelectedTask(taskId, task)

            res.status(200).json({
                ...updated
            })
        } catch (error) {
            next(error)
        }
    },
    remove: async (req, res, next) => {
        try {
            const taskId = req.params.id;

            const deleted = await service.deleteSelectedTask(taskId);

            res.status(200).json({
                ...deleted
            })
        } catch (error) {
            next(error);
        }
    },
}