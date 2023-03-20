const express = require("express");
const router = express.Router();
const Campaign = require("./../modules/campaign.js");
const User = require("./../modules/user.js");
const Ngo = require("./../modules/ngo.js");

router.post("/add/:ngoID", async function (req, res) {
  const ngoID = req.params.ngoID;
  const newCampaign = Campaign({
    poster: req.body.poster,
    ngoID: req.body.ngoID,
    title: req.body.title,
    about: req.body.about,
    tags: req.body.tags,
    donors: req.body.donors,
    phone: req.body.phone,
    email: req.body.email,
    participated: req.body.participated,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    hasEnded: req.body.hasEnded,
    raised: req.body.raised,
    totalAmount: req.body.totalAmount,
  });

  try {
    const savedData = await newCampaign.save();
    const campaignID = savedData._id;

    await Ngo.findOneAndUpdate(
      { _id: ngoID },
      {
        $push: { campaigns: campaignID },
      }
    );

    const response = {
      campaignID: campaignID,
      message: "Your campaign has been added ",
    };
    res.status(200).json({
      campaignID: campaignID,
      message: "Successfully added campaign",
    });
  } catch {
    res.status(500).json({
      error: err,
      message: "Adding campaign failed",
    });
  }
});

router.get("/top10", async function (req, res) {
  const campaign = await Campaign.find().sort({ startDate: "asc" }).limit(10);
  res.json(campaign);
});

router.get("/list", async function (req, res) {
  const campaign = await Campaign.find();
  res.json(campaign);
});

router.put("/addDonor/:campaignID/:userID", async function (req, res) {
  const campaignID = req.params.campaignID;
  const userID = req.params.userID;

  await Campaign.findOneAndUpdate(
    { _id: campaignID },
    { $push: { donors: userID } }
  ).catch((err) => {
    if (err) {
      res.status(400).json({
        message: "Error in adding user to campaign",
      });
    }
  });

  await User.findOneAndUpdate(
    { _id: userID },
    {
      $push: { campaigns: campaignID },
      $inc: { numberOfCampaigns: 1, points: 10 },
    }
  ).catch((err) => {
    if (err) {
      res.status(400).json({
        message: "Error in adding user to campaign",
      });
    }
  });
  res.status(200).json({
    message: "user added successfully",
  });
});
module.exports = router;

/*
// {
    // "poster": "",
    // "ngoID": "1234",
    // "title": "Hello1",
    // "about": "Hello1",
    // "tags": ["Hello1","Hello1","Hello1"],
    // "donors" : ["321","432","789"],
    // "phone": 0,
    // "email": "Hello1",
    // "participated": 10,
    // "startDate": "2023-03-24",
    // "endDate": "2025-03-19",
    // "hasEnded": false,
    // "raised": 1200,
    // "totalAmount": 5000
// }

*/
