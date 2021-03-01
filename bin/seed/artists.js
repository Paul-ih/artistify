require("../../config/mongo");
const ArtistModel = require("../../model/artistsModel");

const dataArtists = [
  {
    name: "Juan The Guitar Player",
    isBand: true,
    description: "It is a Latin-American Salsa Band",
  },
  {
    name: "PianoThais",
    isBand: false,
    description: "Thais, the solo best Piano Player in Europe"
  },
];

ArtistModel.create(dataArtists)
.then((artistDB)=>{
    console.log(artistDB)
})
.catch((err)=>{
    console.log(err)
})