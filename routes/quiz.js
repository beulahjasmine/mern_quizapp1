const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const quizCtrl = require('../controllers/quiz');

// Protected route: list quizzes for logged-in users
router.get('/', protect, quizCtrl.list); 

// Protected route: get a single quiz by ID
router.get('/:id', protect, quizCtrl.get); 

// Admin-only routes
router.post('/', protect, admin, quizCtrl.create);
router.put('/:id', protect, admin, quizCtrl.update);
router.delete('/:id', protect, admin, quizCtrl.remove);
router.post('/:id/questions', protect, admin, quizCtrl.addQuestion);

module.exports = router;
