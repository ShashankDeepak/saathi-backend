const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4002;

app.use(bodyParser.urlencoded({}));
app.use(bodyParser.json());

//Routers

const notification_router = require("./routes/notification");

mongoose
  .connect(
    "mongodb+srv://Shashank:PqrbdkID1S05b2XZ@cluster0.g6ls0lt.mongodb.net/notesdb"
  )
  .then(function () {
    app.get("/", function (req, res) {
      res.send("Hello");
    });

    app.use("/notifications", notification_router);
  });

app.listen(PORT);
