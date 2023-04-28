const router = require('express').Router();
const controller = require('./controller');


router.post('/', controller.new);

router.get('/:userId', );

router.put('/:id');

router.delete('/:id')


module.exports = router;