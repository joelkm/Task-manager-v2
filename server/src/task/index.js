const router = require('express').Router();
const controller = require('./controller');
const { checkLoged } = require('../common/auth-check');


router.post('/:spaceId', checkLoged, controller.new);

router.get('/:spaceId', checkLoged, controller.show);

router.put('/:id', checkLoged, controller.update);

router.delete('/:id', checkLoged, controller.remove);

module.exports = router;