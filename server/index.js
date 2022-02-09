var express = require("express");
var cors = require("cors");
var app = express();
var PORT = process.env.PORT || 5000;
var bodyParser = require("body-parser");
var path = require("path");

app.use(cors());

app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/front/thalya.ma`));
app.use(express.static(`${__dirname}/front`));

app.get("/homepage", (req, res) => {
  res.sendFile(`${__dirname}/front/thalya.ma/index.html`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});

var server = app.listen(PORT, function () {
  console.log("Listening on port " + server.address().port);
});
