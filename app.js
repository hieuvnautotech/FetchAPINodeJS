const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
dotenv.config();
//middle ware
app.use(bodyParser.json());
// import routes
const postRoute = require('./routes/post');
app.use('/post', postRoute);
//routes
app.get("/", (req, res) => {
  res.send("we are on home");
});


//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to db!")
);
// listen
app.listen(3000, () =>
  console.log("App is listening on url http://localhost:3000")
);
