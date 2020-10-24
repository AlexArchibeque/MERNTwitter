const express = require("express");
const port = process.env.PORT || 5000;

const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) =>{

  res.send("hello asdasdasdasdasd world!")
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

app.use("/api/users", users)
app.use("/api/tweets", tweets)