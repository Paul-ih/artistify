const express = require("express");
const router = express.Router();
const ArtistModel = require("../model/artistsModel");
const LabelModel = require("../model/labelsModel");
const StylesModel = require("../model/stylesModel");

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("index");
});

/* GET dashboard page  */
router.get("/dashboard", (req, res) => {
  res.render("dashboard/index");
});

// Router artists

router.get("/dashboard/artist", (req, res, next) => {
  ArtistModel.find()
  .then(( artistDocument ) => {
    res.render("dashboard/artists", {
      artists : artistDocument
          })})
  .catch(next)
 
});

//Router Labels 

router.get("/dashboard/label", (req, res, next) => {
  LabelModel.find()
    .then((labelDocument) => {
      res.render("dashboard/labels", {
        labels: labelDocument,
      });
    })
    .catch(next);
});

//Router Styles

router.get("/dashboard/style", (req, res, next) => {
  StylesModel.find()
    .then((stylesDocument) => {
      res.render("dashboard/styles", {
        styles: stylesDocument,
      });
    })
    .catch(next);
});








module.exports = router;
