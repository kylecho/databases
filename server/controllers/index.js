var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.users.get(req.body);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var userId = models.users.get(req.body.username, function(record){
        console.log('RECORDS RETURNED', record);
        return record.id;
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
        console.log('SUCCESSFUL RESPONSE', response);
        res.end();
      });
    }
  }
};

