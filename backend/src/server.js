const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();
mongoose.connect(
  "mongodb+srv://tindev_react:tindev_react@cluster0-saieq.mongodb.net/ommnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  },
);
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
