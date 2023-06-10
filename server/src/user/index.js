const passport = require("passport")
const router = require('express').Router();
const controller = require('./controller');
const { checkNotLoged, checkLoged } = require("../common/authCheck");

require('../config/auth-config')(passport);

router.post('/register', checkNotLoged, controller.new);

router.post("/login", checkNotLoged,
    passport.authenticate('local',{
        successReturnToOrRedirect: '/',
        failureMessage: true
    })
);

router.post("/password-reset", checkNotLoged, controller.resetPassword);

router.put("/password-reset/:id/:token", checkNotLoged, controller.updatePassword);

router.delete("/logout", checkLoged ,controller.logout);

module.exports = router;