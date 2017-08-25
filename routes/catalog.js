var express = require('express');
var router = express.Router();

// Require controller modules
var author_controller = require('../controllers/authorController');

/// AUTHOR ROUTES ///

/* GET request for one Author. */
router.get('/author/:id', author_controller.author_detail);

/* GET request for list of all Authors. */
router.get('/authors', author_controller.author_list);

module.exports = router;
