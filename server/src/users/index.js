const router = require('express').Router();
const controller = require('./controller');


router.post('/', controller.new);

router.post("/login", controller.login);

router.post("/password-reset", controller.resetPassword);

router.put("/password-reset/:id/:token", controller.updatePassword);

// router.put("/logout/:id", controller.logout);

router.get('/:id', controller.getSingle);

module.exports = router;