
const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // username
        user: "root",
        // password
        password: "MySQLPassw0rd!",
        database: "election"
    },
    console.log("Connected to the election database.")
);

module.exports = db;