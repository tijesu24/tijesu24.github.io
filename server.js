var express = require("express");
var app = express();
const port = process.env.PORT || 8080;
var server = app.listen(port);
app.use(express.static("public"));
