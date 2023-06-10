const router = require('express').Router();
const controller = require('./controller');
const { checkLoged } = require('../common/authCheck');


router.post('/', checkLoged, controller.new);

router.get('/', checkLoged, controller.show);

router.put('/:id', checkLoged, controller.update);

router.delete('/:id', checkLoged, controller.remove);

module.exports = router;