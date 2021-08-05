var express = require('express');
var router = express.Router();
var dbConfig = require('../config/dbConfig')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send({
  //   'list': [3]
  // })
  const sql = 'select * from user_info'
  const sqlArr = []
  const callback = (err, data) => {
    if(err) {
      console.info('连接出错')
    } else {
      res.send({
        'list': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callback)
});

module.exports = router;
