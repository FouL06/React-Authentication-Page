/*
 * Author: Ashton Foulger | FouL06.github.io
 * Date: 8/17/22
 * Version: v0.1
 */

// Required imports
const express = require("express");
const mysql = require("mysql");

// Express server
const app = express();
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  user: "root",
  host: "0.0.0.0",
  password: "password",
  database: "Users",
});

app.listen(3306, () => {
  console.log("running server");
});
