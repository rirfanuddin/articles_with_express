var express = require('express');
var router = express.Router();

/* GET data */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM mahasiswa', function (error, results, fields) {
        if (error) throw error;
        res.json( results );
    });
});

module.exports = router;
