const { addTask, getTasksFromUser, updateSelectedTask, deleteSelectedTask } = require('./service');

module.exports = {
    new: async (req, res, next) => {
        try {
            let task = {
                user: req.user._id,
                ...req.body
            };
            task = await addTask(task);
            res.status(201).json({
                data: task
            })
        } catch (error) {
            next(error)
        }
    },
    show: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const tasks = await getTasksFromUser(userId)
            return res.status(200).json({
                data: tasks
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const taskId = req.params.id;
            const task = req.body
            const updated = await updateSelectedTask(taskId, task)
            return res.status(200).json({
                data: updated
            })
        } catch (error) {
            next(error)
        }
    },
    remove: async (req, res, next) => {
        try {
            const taskId = req.params.id;
            const deleted = await deleteSelectedTask(taskId);
            return res.status(200).json({
                data: deleted
            })
        } catch (error) {
            next(error);
        }
    },
}