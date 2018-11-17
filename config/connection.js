//Dependencies
var mysql = require('mysql2');
var connection;
if(Process.env.JAWSDB_URL) {

//Connection Information to mysql
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else
connection = mysql.createConnection({
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