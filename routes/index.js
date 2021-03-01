const express = require("express");
const router = express.Router();
const ArtistModel = require("../model/artistsModel");

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("index");
});

/* GET dashboard page  */
router.get("/dashboard", (req, res) => {
  res.render("dashboard/index");
});

// Router artists

router.get("/dashboard/artists", (req, res, next) => {
  ArtistModel.find()
  .then(( artistDocument ) => {
    res.render("dashboard/artists", {
      artists : artistDocument
          })})
  .catch(next)
 
});






module.exports = router;
