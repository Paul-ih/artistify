const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema= new Schema ({
name: {
    type : String,
    unique: true
},
isBand: {
    type: Boolean
},
description : {
    type : String
},
picture : {
    type: String, 
    default : "https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/no-image-logo_dcufai.png"
}
})

const ArtistModel = mongoose.model("artists", artistSchema)

module.exports = ArtistModel