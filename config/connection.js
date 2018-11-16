//Dependencies
var mysql = require('mysql2');

//Connection Information to mysql
var connection = mysql.createConnection({
  host     : 'g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port     : 3306,
  user     : 'xdsejclbiov3ozdu',
  password : 'pbcl4m439a0m60vd',
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