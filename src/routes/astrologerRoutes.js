const express = require('express');
const router = express.Router();
const astrologerService = require('../controllers/astrologerController');


router.post('/', astrologerService.createAstrologer);


router.get('/', astrologerService.getAllAstrologers);


router.get('/:id', astrologerService.getAstrologerById);

module.exports = router;
