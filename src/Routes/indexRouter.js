const express = require('express');
const router = express.Router();
const controller = require('../Controllers/indexController');

router.get('/', controller.home);



module.exports = router;