const router = require('express').Router();
const controller = require('./controller');


router.post('/', controller.create);

router.get('/:userId', controller.show);

router.put('/:id', controller.update);

router.delete('/:id', controller.remove);


module.exports = router;