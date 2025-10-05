const Skill = require('../models/Skill');

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
exports.getAllSkills = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};

    if (category) filter.category = category;

    const skills = await Skill.find(filter).sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching skills',
      error: error.message
    });
  }
};

// @desc    Get skills grouped by category
// @route   GET /api/skills/grouped
// @access  Public
exports.getSkillsGrouped = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1, createdAt: -1 });

    const grouped = skills.reduce((acc, skill) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {});

    res.status(200).json({
      success: true,
      data: grouped
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching grouped skills',
      error: error.message
    });
  }
};

// @desc    Create skill
// @route   POST /api/skills
// @access  Private (Admin)
exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Skill created successfully',
      data: skill
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating skill',
      error: error.message
    });
  }
};

// @desc    Update skill
// @route   PUT /api/skills/:id
// @access  Private (Admin)
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Skill updated successfully',
      data: skill
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating skill',
      error: error.message
    });
  }
};

// @desc    Delete skill
// @route   DELETE /api/skills/:id
// @access  Private (Admin)
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Skill deleted successfully',
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting skill',
      error: error.message
    });
  }
};
