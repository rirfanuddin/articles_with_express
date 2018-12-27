var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  connection.query('SELECT * FROM mahasiswa', function(error, results, fields){
    if(error) throw error;
    res.render('index', {title : 'Get all data mahasiswa', data : results})
  });
});

module.exports = router;
