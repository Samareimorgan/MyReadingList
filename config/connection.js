//Dependencies
var mysql = require('mysql2');

//Connection Information to mysql
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'password',
  database : 'readinglist_db'
});
 

//Create connection to mysql
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  //Export Connection for ORM to utilize
  module.exports = connection;