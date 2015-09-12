var mysql = require('mysql');
console.log('___________>>>>>>>>>>>> INDEX.')

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

connection.connect();

connection.end();

module.exports.mysql = mysql;