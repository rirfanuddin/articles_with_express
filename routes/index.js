var express = require('express');
var router = express.Router();

/* GET home page - list all data mahasiswa */
router.get('/', function(req, res, next){
  connection.query('SELECT * FROM mahasiswa', function(error, results, fields){
    if(error) throw error;
    res.render('index', {title : 'Get all data mahasiswa', data : results})
  });
});

/* POST add data mahasiswa */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add Data Mahasiswa' });
});
router.post('/add', function(req, res, next) {
  connection.query(`INSERT INTO mahasiswa(nama,nim,jurusan) VALUES('${req.body.nama}','${req.body.nim}','${req.body.jurusan}')`, function (error, results, fields) {
    if (error) throw error;
    console.log('Sukses');
  });
  res.render('add', { title: 'Add Data Mahasiswa'});
});

module.exports = router;
