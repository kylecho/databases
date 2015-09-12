var models = require('../models');
console.log("models------------->>>>>>>>>>>>");
module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("post messages controller");
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log("post from user controller");
    }
  }
};

