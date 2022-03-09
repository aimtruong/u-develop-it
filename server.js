
const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});


// default response for any other request
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
