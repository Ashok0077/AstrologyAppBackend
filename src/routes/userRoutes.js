const express = require('express');
const router = express.Router();
const userService = require('../controllers/userController');


router.post('/', userService.createUser);

router.get('/', userService.getAllUsers);

router.get('/:id', userService.getUserById);

module.exports = router;
