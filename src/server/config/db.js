const mysql = require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: "",
    database: "testing"
})

module.exports = db;