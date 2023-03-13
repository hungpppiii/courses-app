const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store);
router.post('/:id/delete', courseController.delete);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:slug', courseController.show);

module.exports = router;
