const express = require("express");
const router = express.Router();
const ArtistModel = require("../model/artistsModel");
const LabelModel = require("../model/labelsModel");
const StylesModel = require("../model/stylesModel");
const uploader = require("../config/cloudinary");

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("index");
});

/* GET dashboard page  */
router.get("/dashboard", (req, res) => {
  res.render("dashboard/index");
});

// ROUTER ARTISTS
//Router List Artists

router.get("/dashboard/artist", (req, res, next) => {
  ArtistModel.find()
  .then(( artistDocument ) => {
    res.render("dashboard/artists", {
      artists : artistDocument
          })})
  .catch(next)
 
});

//Router Delete Artists
router.post("/dashboard/artist/delete/:id", (req, res, next)=>{
  ArtistModel.findByIdAndDelete(req.params.id)
  .then(()=>res.redirect('/dashboard/artist'))
  .catch(next)
})

//Router Create Artists
router.get("/dashboard/artist/create", (req, res, next)=>{
  res.render("dashboard/artistCreate")
})

router.post("/dashboard/artist/create", uploader.single("picture"), (req, res, next) => {
  const {name, isBand, description } = req.body;
  let picture;
  console.log(req.file)
  if (req.file) {
    picture = req.file.path;
  }
  ArtistModel.create({
    name,
    isBand: isBand === "on",
    description,
    picture
  })
  .then(()=>{
    res.redirect("/dashboard/artist")
  })
  .catch((err)=>{
    console.log(err)
  })
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

router.post("/dashboard/label/delete/:id", (req, res, next)=>{
  LabelModel.findByIdAndDelete(req.params.id)
  .then(()=>res.redirect('/dashboard/label'))
  .catch(next)
})

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

router.post("/dashboard/style/delete/:id", (req, res, next)=>{
  StylesModel.findByIdAndDelete(req.params.id)
  .then(()=>res.redirect('/dashboard/style'))
  .catch(next)
})







module.exports = router;
