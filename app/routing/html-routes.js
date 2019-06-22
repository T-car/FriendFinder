//Include the path package to get the correct file path
var path = require('path');

  //route to display the survey page - survery.html)
module.exports = function(app) {
  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // If no matching route is found default to blank survey
  app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
};