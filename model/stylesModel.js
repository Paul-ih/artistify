const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylesSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  color: {
      type: String,
      default: "#000",
  },
  wikiURL: String,
});

const StylesModel = mongoose.model("styles", stylesSchema);

module.exports = StylesModel;