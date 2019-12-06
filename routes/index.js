var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql')

var login = false;
var username = null;

var conn = mysql.createConnection({
    host: "maria-database.mariadb.database.azure.com",
    user: "appadmin@maria-database",
    password: "Nandu@141",
    database: "weather",
    port: 3306,
    //ssl: { ca: fs.readFileSync({ ca - cert filename }) }
});
conn.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Weather App', user: username });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login', user: username });
});

router.post('/login', function(req, res, next) {

    username = req.body.username;
    var password = req.body.password;


    conn.query('SELECT * FROM users WHERE username = ? and password = ?', [username, password], function(err, rows, fields) {
        if (err)
            throw err;
        if (rows.length > 0) {
            login = true;
            res.render('weather', { title: 'Weather', user: username });
        } else {
            res.redirect('/login');
        }
    });
})
router.get('/weather', function(req, res) {
    if (login == false) {
        res.redirect('/login');
    }
    res.render('weather', { title: 'Weather', user: username });
})

router.get('/logout', function(req, res) {
    if (login == true) {
        login = false;
        username = null;
        res.redirect('/login');
    }
})

router.get('/menu', function(req, res) {
    if (login == false) {
        res.redirect('/login');
    }
    res.render('menu', { title: 'menu', user: username });
})
module.exports = router;