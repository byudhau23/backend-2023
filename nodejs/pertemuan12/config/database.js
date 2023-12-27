// import mysql
const mysql = require("mysql2")

// import dotenv
require("dotenv").config();

// make connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// });

const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

// connect to database
db.connect(function (err) {
    if (err) {
        console.log(`koneksi error: ${err}`);
        return;
    } else {
        console.log("koneksi berhasil");
        return;
    }
});

// export db
module.exports = db;