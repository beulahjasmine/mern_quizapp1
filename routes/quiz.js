const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const quizCtrl = require('../controllers/quiz');

router.get('/', quizCtrl.list);
router.get('/:id', quizCtrl.get);
router.post('/', protect, admin, quizCtrl.create);
router.put('/:id', protect, admin, quizCtrl.update);
router.delete('/:id', protect, admin, quizCtrl.remove);
router.post('/:id/questions', protect, admin, quizCtrl.addQuestion);

module.exports = router;
