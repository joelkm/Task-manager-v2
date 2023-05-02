const passport = require("passport")
const router = require('express').Router();
const controller = require('./controller');

require('./config/passport')(passport);

router.post('/', controller.new);

router.post("/login", passport.authenticate('local',{
    successReturnToOrRedirect: '/',
    failureMessage: true
}));

router.post("/password-reset", controller.resetPassword);

router.put("/password-reset/:id/:token", controller.updatePassword);

router.delete("/logout", controller.logout());

router.get('/:id', controller.getSingle());

module.exports = router;