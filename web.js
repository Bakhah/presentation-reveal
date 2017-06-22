
var express = require("express");
var app = express();
var logger = require('morgan');

app.use(logger);
app.use("/", express.static(__dirname));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
