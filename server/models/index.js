var db = require('../db');

module.exports = {

  messages: {
    get: function () {
      db.query("SELECT ( ? ) FROM messages", [data.message], function(){
        console.log('Retrieved the message of :', data.message);
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      // db.query('INSERT INTO messages (id, message, user_id, room_id) VALUES(1, "Hello from Kyle", 1, 1)', function(){});
      db.query('INSERT INTO messages (message) VALUES( ? )', [data.message], function(e){
      });    
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (data, cb) {
      var q = !data ? 'SELECT * FROM users ' : "WHERE name=" + "'"+  data + "'";

      db.query(q, [data], function(results){
        console.log('Retrieved the username of :', results);
        cb(results)
      });
    },
    post: function (data, cb) {
      db.query('INSERT INTO users (name) VALUES( ? )', [data.username], function(err, res){
        cb(res);
      });
    }
  }
};
