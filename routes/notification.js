const express = require("express");
const router = express.Router();
const Notifications = require("./../modules/notification");

router.post("/add/:userID", async function (req, res) {
  const newNotifications = Notifications({
    userID: req.params.userID,
    ngoID: req.body.ngoID,
    title: req.body.title,
    subtitle: req.body.subtitle,
    date: req.body.date,
  });
  const savedData = await newNotifications.save();
  const response = {
    notificationID: savedData._id,
    message: "Your notification has been added ",
  };
  res.status(200).json(response);
});

router.get("/list/:userID", async function (req, res) {
  var notification = await Notifications.find({
    userID: req.params.userID,
  });
  res.json(notification);
});

module.exports = router;
