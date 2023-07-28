const Task = require("./model");
const AppError = require("../common/app-error");

async function assigneesExistInSpace(assignees, space) {
    const members = space.members;

    return await assignees.every(assignee => members.include(assignee))
}

module.exports = {
    addTask: async (data) => {
        const task = await Task.create({
            ...data
        });
        if (!task) throw new AppError(400, "Task was not created");

        return task;
    },
    getTasksFromSpace: async (spaceId) => {
        const tasks = await Task.find({ space: spaceId })
            .populate("space")
            .populate("user", "-password");

        return tasks;
    },
    updateSelectedTask: async (taskId, task) => {
        const oldTask = Task.findById(taskId)
            .populate("space");

        if (task.assignees)
            if (!await assigneesExistInSpace(task.assignees, oldTask.space))
                throw new AppError(400, "One or more assignees do not exist in the space");

        const updatedTask = await Task.findByIdAndUpdate(taskId,
            { ...task },
            { returnDocument: 'after' })
            .populate("space")
            .populate("user", "-password");

        if (updatedTask == oldTask) throw new AppError(400, "Task was not updated")

        return updatedTask;
    },
    deleteSelectedTask: async (taskId) => {
        if (!await Task.findById(taskId)) throw new AppError(404, "Task doesn't exist");

        const deleted = await Task.findByIdAndDelete(taskId);
        if (!deleted) throw new AppError(400, "Task was not deleted")

        return deleted;
    },
}