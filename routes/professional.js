const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET professional profile info
router.get('/professional', professionalController.getProfessional);

module.exports = router;