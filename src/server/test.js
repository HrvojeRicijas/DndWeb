var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "root",
  password: "",
  database: "testing"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});