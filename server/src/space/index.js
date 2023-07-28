const router = require('express').Router();
const controller = require('./controller');
const { checkLoged } = require('../common/auth-check');


router.post('/', checkLoged, controller.new);

router.get('/', checkLoged, controller.show);

router.put('/:id', checkLoged, controller.update);

router.put('/:id/add', checkLoged, controller.addMember);

router.put('/:id/remove', checkLoged, controller.removeMember);

router.delete('/:id', checkLoged, controller.delete);

module.exports = router;