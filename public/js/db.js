var mysql = require('mysql')
function connection(){
  var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nandu',
    password: 'password',
    database: 'firstapp'
  })
  return conn;
}


exports.getRows = function(){
  var conn = connection();
  conn.connect();  
  var row ;  
  if(conn == null){
    console.log('could not establish the conneciton.');
  }
  conn.query('SELECT * FROM users WHERE username = ? and password = ?',['root','root'],function(err,rows,fields){
    if(err) throw err;
    row = rows;
    console.log('row elements in db file :',rows[0]);
    console.log('length of the rows array is :',rows.length);
  })
  return ;
}