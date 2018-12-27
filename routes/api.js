var express = require('express');
var router = express.Router();

/* GET data */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM mahasiswa', function (error, results, fields) {
        if (error) throw error;
        res.json( results );
    });
});

/* POST data. */
router.post('/', function(req, res, next) {
    connection.query(`INSERT INTO mahasiswa(nama,nim,jurusan) VALUES('${req.body.nama}','${req.body.nim}','${req.body.jurusan}')`, function (error, results, fields) {
        if (error) throw error;
        res.json('Success');
    });
});

module.exports = router;
