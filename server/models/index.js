var db = require('../db');

module.exports = {

  messages: {
    get: function (data,cb) {
      var rows = [];
      var query = db.query('SELECT * FROM messages');
      query
        .on('error', function(err) {
          // Handle error, an 'end' event will be emitted after this as well
          console.log('THERE IS AN ERROR IN STREAM QUERY', err);
          cb(err);
        })
        .on('fields', function(fields) {
          // the field packets for the rows to follow

        })
        .on('result', function(row) {
          // Pausing the connnection is useful if your processing involves I/O
          console.log('NEW ROWWWW', row);
          rows.push(row);
        })
        .on('end', function() {
          // all rows have been received
          console.log('QUERY HAS ENDED SUCCESSFULLY', rows);
          cb(null, rows);
        });


      // db.query("SELECT (?) FROM messages", [data], function(err, results){
      //   console.log('Retrieved the message of :', results);
      //   cb(err, results);
      // });
    }, // a function which produces all the messages
    post: function (data, cb) {
// | message | text  | user_id |  room_id |
      db.query('INSERT INTO messages (message, user_id, roomname) VALUES ( ?, ?, ? )', [data.message, data.id, data.roomname], function(err, res){
        console.log('ATTEMPT INSERT INTO MESSAGES TABLE: ', res, 'ERROR ?', err);
        cb(res);
      });
      
   
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (data, cb) {

      db.query('SELECT * FROM `users` WHERE `name` = ?', [data], function(err, data){
        console.log('Retrieved the username of :', data);
        if(!err) {
          console.log('QUERY ERROR: ',err );
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
