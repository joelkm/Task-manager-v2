const AppError = require("./app-error");
const Space = require("../space/model")

function isLogged(req) {
    if (req.user) return true;
    return false;
}

async function isSpaceAdmin(user, spaceId) {
    const space = await Space.findById(spaceId);

    if (user._id == space.spaceAdmin) return true;
    else return false;
}


module.exports = {
    checkLoged: (req, res, next) => {
        if (isLogged(req)) next();
        else res.redirect('/login');
    },
    checkNotLoged: (req, res, next) => {
        if (!isLogged(req)) next();
        else next(new AppError(401, "User is already logged"));
    },
    checkSpaceAdmin: async (req, res, next) => {
        const user = req.user;
        const spaceId = req.params.id;

        if (await isSpaceAdmin(user, spaceId)) next();
        else next(new AppError(403, "User is not the admin of this space"))
    }
}