// var config = require("./config");
// var db = require("knex")(config);
var express = require("express");

express()
 .get("*", function(req, res) {
    //db("users").then(function(data) {
    //  res.send(data);
    //});
    res.send("According to the task Knex database wasn't setup.\nYep, where is DB bro? ~_^");
 })
 .listen(80, function(err) {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Express Server listening on port 80");
  })
;
