var express = require('express');
var router = express.Router();
var db = require('../bin/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Weather App', user: username });
});

var login = false;
var username = null;


router.post('/login', function (req, res, next) {

    let username = req.body.username;
    let password = req.body.password;

    client = db.getClient();
    client.connect(err => {
        const collection = client.db(db_name).collection(collection_name);

        collection.find({ 'username': username, 'password': password }).toArray(function (err, items) {
            if (items.length == 1) {
                console.log(items);
                login = true;
                res.render('weather', { title: 'Weather', user: username });
            } else res.redirect('/login');
        })
    });
});


router.get('/logout', function (req, res) {
    if (login == true) {
        login = false;
        username = null;
        res.redirect('/login');
    }
});


router.get('/login', function (req, res, next) {
    res.render('login', { title: 'Login', user: username });
});

router.get('/weather', function (req, res) {
    if (login == false) {
        res.redirect('/login');
    }
    res.render('weather', { title: 'Weather', user: username });
});

router.get('/menu', function (req, res) {
    if (login == false) {
        res.redirect('/login');
    }
    res.render('menu', { title: 'menu', user: username });
});

module.exports = router;