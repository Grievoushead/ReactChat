var express = require("express");
var app = express();

// serve index.html
app.use(express.static("./public"));

// serve app files
app.use("/app", express.static("./app"));

var port = process.env.PORT || 9000;
app.listen(port);
console.log("Running server on port " + port + ", press ctrl + c to stop.");
