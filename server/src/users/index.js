const router = require('express').Router();
const controller = require('./controller');

router.get('/', getUser)

router.post('/:id', postUser);

router.put("/login", controller.login);

router.post("/password-reset", controller.resetPasswordEmail);

router.put("/password-reset/:id/:token", controller.changePassword);

router.put("/logout/:id", controller.logout);

module.exports = router;