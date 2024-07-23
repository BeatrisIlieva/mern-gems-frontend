const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const { auth } = require("./middlewares/authMiddleware");
const bodyParser = require("body-parser");

const app = express();

// mongoose
//   .connect(
//     "mongodb+srv://beatrisilieve:31iiG2CgGYT18OZg@merngemscluster.u9znfhf.mongodb.net/?retryWrites=true&w=majority&appName=MERNGemsCluster"
//   )
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err.message));

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-gems")
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
