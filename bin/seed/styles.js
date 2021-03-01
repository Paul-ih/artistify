require("../../config/mongo");
const StylesModel = require("../../model/stylesModel");

const dataStyles = [
  {
    name: "RbB",
    color: "pink",
    wikiURL: "https://fr.wikipedia.org/wiki/RnB_contemporain",
  },
  {
    name: "Rap",
    color: "black",
    wikiURL: "https://fr.wikipedia.org/wiki/Rap",
  },
  {
    name: "Classical",
    color: "yellow",
    wikiURL: "https://fr.wikipedia.org/wiki/Classique",
  },
];

StylesModel.create(dataStyles)
  .then((artistDB) => {
    console.log(artistDB);
  })
  .catch((err) => {
    console.log(err);
  });
