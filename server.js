const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4002;

const mongoURL = require("./config");

app.use(bodyParser.urlencoded({}));
app.use(bodyParser.json());

//Routers

const notification_router = require("./routes/notification");
const campaign_router = require("./routes/campaign");

mongoose.connect(mongoURL.db_url).then(function () {
  //mongoURL.mongo_url -> it is the url of the database
  app.get("/", function (req, res) {
    res.send("Hello");
  });

  app.use("/notifications", notification_router);

  app.use("/campaign", campaign_router);
});

app.listen(PORT);
