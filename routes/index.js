var express = require('express');
var router = express.Router();
var dbConfig = require('../config/dbConfig')
var userController = require('../controller/userController')
var blogController = require('../controller/blogController')
/* GET home page. */
router.get('/', userController.getUsers);
router.get('/getPostsByUserId', blogController.getPosts);

module.exports = router;