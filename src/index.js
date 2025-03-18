const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { auth } = require("./middlewares/authMiddleware");

const app = express();

mongoose
  .connect(
    "mongodb+srv://beatrisilieve:H7FAVwXvlhhOZsvU@merngems.qaktc.mongodb.net/?retryWrites=true&w=majority&appName=MERNGems"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
app.use(auth);

app.get("/", (req, res) => {
  res.send("RESTful service");
});

app.use(routes);

const PORT = 4000;

const server = app.listen(PORT, function () {
  console.log(`RESTful server is listening on port ${PORT}...`);
});

module.exports = { app, server };
