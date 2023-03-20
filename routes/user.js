const express = require("express");
const router = express.Router();
const User = require("./../modules/user.js");

router.post("/add", function (req, res) {
  const newUser = User({
    name: req.body.name,
    image: req.body.image,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    whatsapp: req.body.whatsapp,
    gender: req.body.gender,
    numberOfDonations: req.body.numberOfDonations,
    numberOfCampaigns: req.body.numberOfCampaigns,
    points: req.body.points,
    leaderboardRank: req.body.leaderboardRank,
    notifications: req.body.notifications,
    campaigns: req.body.campaigns,
    donations: req.body.donations,
  });
  try {
    const savedData = newUser.save();

    res.status(200).json({
      userID: savedData._id,
      message: "Successfully added user",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error adding user",
      error: err,
    });
  }
});

router.put("/updateDetails/:userID", async (req, res) => {
  const userID = req.params.userID;

  const updatedFields = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    whatsapp: req.body.whatsapp,
    gender: req.body.gender,
  };

  try {
    await User.findOneAndUpdate(
      { _id: userID },
      {
        $set: updatedFields,
      }
    ).then((_) => {
      res.status(200).json({
        message: "Updated user details",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating user",
      error: err,
    });
  }
});

router.put("/updateImage/:userID", async (req, res) => {
  const userID = req.params.userID;

  await User.findOneAndUpdate(
    { _id: userID },
    {
      image: req.body.image,
    }
  ).then((_) => {
    res.status(200).json({
      message: "Updated user image",
    });
  });
});

module.exports = router;

/*
{
    "name": "shashank",
    "image": "",
    "email": "",
    "address": "",
    "phone": 0,
    "whatsapp": 0,
    "gender": "",
    "numberOfDonations": 0,
    "numberOfCampaigns": 0,
    "notifications": [],
    "campaigns": [],
    "donations": []
}
*/
