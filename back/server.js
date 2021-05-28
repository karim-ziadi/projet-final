// // import express
// const express = require('express');
// const connectDB = require('./config/conectDB');
// // instance app
// const app = express();

// require('dotenv').config();

// connectDB()

// //router
// //user
// app.user(express.json());
// app.user("/api/user", require("./router/user"));

// // port
// const PORT = process.env.PORT || 5000;

// app.listen(PORT,(err) => err ? console.error(err) : console.log(`server is running on PORT ${PORT}`));

const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/connectDB");
const app = express();

connectDB();

app.use(express.json());
app.use("/api/user", require("./router/user"));

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, (err) => {
    err
        ? console.log(err)
        : console.log(`the server is running on ${process.env.PORT}`);
});
