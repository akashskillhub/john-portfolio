const express = require('express');
const router = express.Router();
const {
  getAllSkills,
  getSkillsGrouped,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getAllSkills);
router.get('/grouped', getSkillsGrouped);

// Protected routes (Admin only)
router.post('/', protect, createSkill);
router.put('/:id', protect, updateSkill);
router.delete('/:id', protect, deleteSkill);

module.exports = router;
