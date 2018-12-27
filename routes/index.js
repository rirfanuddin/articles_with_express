var express = require('express');
var router = express.Router();

/* GET home page - list all data mahasiswa */
router.get('/', function(req, res, next){
  if(req.query.nama == null){
    connection.query('SELECT * FROM mahasiswa', function(error, results, fields){
      if(error) throw error;
      res.render('index', {title : 'Get all data mahasiswa', data : results})
    });
  }
  else{
    var nama = req.query.nama;
    connection.query(`SELECT * FROM mahasiswa WHERE nama='${nama}'`, function(error, results, fields){
      if(error) throw error;
      res.render('index', {title : 'Get all data mahasiswa', data : results})
    });
  }
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

/* GET-POST edit data */
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query(`SELECT * FROM mahasiswa WHERE id=${id}`, function (error, results, fields) {
    if (error) throw error;
    console.log( results[0] );
    res.render('edit', { title: 'Edit Data Mahasiswa', data: results[0] });
  });
});
router.post('/edit/:id', function(req, res, next) {
  var id      = req.params.id;
  var nama    = req.body.nama;
  var nim     = req.body.nim;
  var jurusan = req.body.jurusan;
  connection.query(`UPDATE mahasiswa SET nama='${nama}', nim='${nim}', jurusan='${jurusan}' WHERE id=${id}`, function (error, results, fields) {
    if (error) throw error;
    res.redirect('/');
  });
});

/* GET delete data. */
router.get('/del/:id', function(req, res, next) {
  var id      = req.params.id;
  connection.query(`DELETE FROM mahasiswa WHERE id=${id}`, function (error, results, fields) {
    if (error) throw error;
    res.redirect('/');
  });
});

module.exports = router;
