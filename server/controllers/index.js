var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( '*',function(err, response){
        console.log('QUERY MESSAGES AND RECEIVED RESPONSE', response);
        if (!err) {
          res.end(JSON.stringify(response));
        } else {
          console.log('THERE IS AN ERROR IN RETRIEVING MESSAGES. ', err);
        }
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {

      // end response
      var endResponse = function() {
        res.end();
      };

      // insert message into database after successful ID retrieval
      var postMessage = function(id){
        console.log('HERE IS BODY TO MESSAGE: ',req.body);
        var d = {id:id, message:req.body.message, roomname:req.body.roomname};
        models.messages.post(d, endResponse);
      };

      // Get user id from users table
      var userId = models.users.get(req.body.username, function(record){
        var rec = record[0].id;
        // console.log('RECORDS RETURNED AND ID IS: ', rec);
        postMessage(rec);
      });

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body);
    },
    post: function (req, res) {
      // var data = "";
      // console.log('DONE CHUNKING AND HERE IS RESULT', req.body);
      models.users.post(req.body, function(response){
        // console.log('SUCCESSFUL RESPONSE', response);
        res.end();
      });
    }
  }
};

