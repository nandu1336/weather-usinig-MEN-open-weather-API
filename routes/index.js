var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql')

var login = false;
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'nandu',
  password: 'password',
  database: 'firstapp'
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res,next){
	res.render('login',{title : 'Login'});
});

router.post('/login',function(req,res,next){
  
  var username = req.body.username;
  var password = req.body.password;
  conn.connect();
  if(conn){
    conn.query('SELECT * FROM users WHERE username = ? and password = ?',[username,password],function(err,rows,fields){
      if(err)
      throw err;
      if(rows.length > 0){
        login = true;
        res.render('weather',{title:'Weather',user:username});
      }
      else{
        res.redirect('/login');
      }
    });
  }
})
router.get('/weather',function(req,res){
  if(login == false){
    res.redirect('/login');
  }
  res.render('weather',{title:'Weather'});
})

router.get('/logout',function(req,res){
  if(login == true){
    login = false;
    res.redirect('/login');
  }
})

router.get('/menu',function(req,res){
  if(login == false){
    res.redirect('/login');
  }
  res.render('menu',{title:'menu'});
})
module.exports = router;
