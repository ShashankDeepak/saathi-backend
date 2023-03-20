const express = require("express");
const router = express.Router();
const Donation = require("./../modules/donation.js");
const User = require("./../modules/user.js");
const Ngo = require("./../modules/ngo.js");

router.post("/add/:userID", async function (req, res) {
  const userID = req.params.userID;
  const newDonation = Donation({
    userID: userID,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    poster: req.body.poster,
    contact: req.body.contact,
    acceptedByID: req.body.acceptedByID,
    isAccepted: req.body.isAccepted,
    donationType: req.body.donationType,
    additionalDetails: req.body.additionalDetails,
    tags: req.body.tags,
  });
  try {
    const savedData = await newDonation.save();
    const donationID = savedData._id;

    await User.findOneAndUpdate(
      { _id: userID },
      { $push: { donations: donationID }, $inc: { numberOfDonations: 1 } }
    );

    res.status(200).json({
      donationID: donationID,
      message: "Donation added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Adding donation failed ",
      error: err.message,
    });
  }
});

router.get("/getUserDonation/:userID", async function (req, res) {
  try {
    var donations = await Donation.find({
      userID: req.params.userID,
    });

    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({
      message: "Fetching donation failed ",
      error: err.message,
    });
  }
});

router.put("/accept/:donationID/:ngoID", async function (req, res) {
  const ngoID = req.params.ngoID;
  const donationID = req.params.donationID;

  try {
    await Ngo.findOneAndUpdate(
      { _id: ngoID },
      { $push: { donations: donationID } }
    );

    res.status(200).json({
      message: "Donation accecpted successfully",
    });
  } catch (err) {
    res.status(500).json({
      erro: err.message,
      message: "Donation accecpt failed",
    });
  }
});

module.exports = router;

/*
    "title": "",
    "description": " ",
    "location": "",
    "poster": "",
    "contact": 0,
    "acceptedByID": "",
    "isAccepted": false,
    "donationType": "",
    "additionalDetails": "",
    "tags": [],
*/
