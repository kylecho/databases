var db = require('../db');

module.exports = {

  messages: {
    get: function (data,cb) {
      var rows = [];
      var query = db.query('SELECT * FROM messages');
      query
        .on('error', function(err) {
          // Handle error, an 'end' event will be emitted after this as well
          cb(err);
        })
        .on('result', function(row) {
          // Pausing the connnection is useful if your processing involves I/O
          rows.push(row);
        })
        .on('end', function() {
          // all rows have been received
          cb(null, rows);
        });

    }, // a function which produces all the messages
    post: function (data, cb) {
      var query = 'INSERT INTO messages (message, user_id, roomname) VALUES ( ?, ?, ? )';

      db.query(query, [data.message, data.id, data.roomname], function(err, res){
        cb(res);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (data, cb) {

      db.query('SELECT * FROM `users` WHERE `name` = ?', [data], function(err, data){
        if (!err) {
          console.log('QUERY ERROR: ', err);
        }
        cb(data);
      });
    },
    post: function (data, cb) {
      db.query('INSERT INTO users (name) VALUES( ? )', [data.username], function(err, res){
        cb(res);
      });
    }
  }
};
