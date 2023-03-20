const express = require("express");
const router = express.Router();
const Ngo = require("./../modules/ngo.js");

router.post("/add", async (req, res) => {
  const newNgo = Ngo({
    name: req.body.name,
    image: req.body.image,
    isVerified: req.body.isVerified,
    about: req.body.about,
    location: req.body.location,
    googleMapLink: req.body.googleMapLink,
    email: req.body.email,
    phone: req.body.phone,
    instagram: req.body.instagram,
    website: req.body.website,
    tags: req.body.tags,
    donations: req.body.donations,
    campaigns: req.body.campaigns,
  });

  try {
    const savedData = await newNgo.save();

    res.status(200).json({
      ngoID: savedData._id,
      message: "Ngo added successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: "Ngo adding failed",
    });
  }
});

router.get("/get10", async function (req, res) {
  try {
    const ngo = await Ngo.find().limit(10);
    res.status(200).json(ngo);
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Unable to fetch top 10 ngo list",
    });
  }
});

router.get("/getByTag", async function (req, res) {
  try {
    const ngos = await Ngo.find({ tags: req.body.tag });
    res.status(200).json(ngos);
  } catch (err) {
    res.status(500).json({
      message: "Unable to get NGOs by tag",
      error: err.message,
    });
  }
});

module.exports = router;

/*
    "name": "Red cross",
    "image": "",
    "isVerified": false ,
    "about": " ",
    "location": "",
    "googleMapLink": "",
    "email": "",
    "phone": 0,
    "instagram": "",
    "website": "",
    "donations": [],
    "campaigns":[]
    "tags": [],
*/
