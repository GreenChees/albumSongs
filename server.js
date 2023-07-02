const express = require('express');
const connection = require('./config/connection.js');
const app = express();
const PORT = 7000;
app.get('/api/music', function (req, res) {
    connection.query('SELECT * FROM songs', function (error, rows) {
        if(error) throw error;
        console.log(rows);
        res.json(rows);
    });
});
app.listen(PORT, function() {
    console.log('functioning')
});
