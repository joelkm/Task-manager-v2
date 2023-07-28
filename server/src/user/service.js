const AppError = require("../common/app-error");
const User = require("./model");
const Space = require("../space/model");
const Task = require("../task/model");

async function userExists(email) {
    return await User.findOne({ email: email });
}

module.exports = {
    registerUser: async (data) => {
        if (await userExists(data.email)) throw new AppError(400, "User already exists");

        const userInfo = await User.create({ ...data });
        if (!userInfo) throw new AppError(400, "User was not created");


        const personalSpace = await Space.create({
            name: `${userInfo.name}'s Space`,
            members: [userInfo._id]
        })
        if (!personalSpace) throw new AppError(400, "Personal space was not created");

        const tutorialTask = await Task.create({
            author: userInfo._id,
            assignees: [userInfo._id],
            name: "Welcome to your Space, this is a 'task'",
            description: "This screen is your personal space. You can create new ones in the 'Spaces' tab. You can also add members to an space by adding their e-mail. Each space has its own tasks. You can create tasks using the '+' icon. Tasks have a name, a description, an author, one or more asignees, a due date (optional) and a state ('Not Started', 'In Progress' or 'Done'). Create spaces, add friends, complete tasks and enjoy!"
        })
        if (!tutorialTask) throw new AppError(400, "Personal space was not created");

        return userInfo;
    }
}