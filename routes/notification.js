const express = require("express");
const router = express.Router();
const Notifications = require("./../modules/notification");

router.post("/list/:userid", async function (req, res) {
  console.log(req.body);
  const newNotifications = Notifications({
    title: req.body.title,
    subtitle: req.body.subtitle,
    date: req.body.date,
  });
  await newNotifications.save();
  const response = {
    message: "Your note has been added " + `title: ${req.body.title}`,
  };
  res.json(response);
});

module.exports = router;
