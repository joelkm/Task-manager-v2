const router = require('express').Router();
const controller = require('./controller');
const { checkLoged, checkSpaceAdmin } = require('../common/auth-check');


router.post('/', checkLoged, controller.new);

router.get('/', checkLoged, controller.showUserSpaces);

router.put('/:id', checkLoged, checkSpaceAdmin, controller.update);

router.put('/:id/invite', checkLoged, checkSpaceAdmin, controller.addMember);

// router.put('/:id/invite', checkLoged, checkSpaceAdmin, controller.inviteMembers);

router.put('/:id/remove', checkLoged, checkSpaceAdmin, controller.removeMember);

router.delete('/:id', checkLoged, checkSpaceAdmin, controller.delete);

module.exports = router;