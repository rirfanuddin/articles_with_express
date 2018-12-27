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

/* PUT data. */
router.put('/:id', function(req, res, next) {
    var id      = req.params.id;
    var nama    = req.body.nama;
    var nim     = req.body.nim;
    var jurusan = req.body.jurusan;
    connection.query(`UPDATE mahasiswa SET nama='${nama}', nim='${nim}', jurusan='${jurusan}' WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;
        res.json('Success');
    });
});

module.exports = router;
