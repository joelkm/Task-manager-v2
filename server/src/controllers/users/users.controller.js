import { response } from 'express';
import { getUserByUsername, saveUser } from '../../models/users/users.model';

async function httpGetUserByUsername (req, res) {
    username = req.body.username;
    response = await getUserByUsername(username);

    if(!response) res.status(404);
    
    res.status(200).json(response);
}

async function httpSaveUser (req, res) {
    user = req.body;

    response = await saveUser(user);

    if(!response) res.status(400).json({
        error: 'User was not created'
    });

    res.status(201).json(response);
}

export default {
    httpGetUserByUsername,
    httpSaveUser
}