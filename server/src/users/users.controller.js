const { getUserByUsername, saveUser } = require('./users.model');

async function httpGetUserByUsername (req, res) {
    const username = req.body.username;
    const user = await getUserByUsername(username);

    if(!user) return res.status(404);
    
    return res.status(200).json(user);
}

async function httpSaveUser (req, res) {
    const user = req.body;

    if(!user.username) return res.status(400).json({
            error: 'No username provided'
        });

    user = await saveUser(user);

    if(!user) return res.status(400).json({
        error: 'User was not created'
    });

    return res.status(201).json(user);
}

module.exports = {
    httpGetUserByUsername,
    httpSaveUser
}