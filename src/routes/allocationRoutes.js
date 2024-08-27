const express = require('express');
const router = express.Router();
const allocationService = require('../controllers/allocationController');


router.post('/assign', allocationService.assignUserToAstrologer);


router.post('/deallocate/:userId', allocationService.deallocateAstrologer);

module.exports = router;
