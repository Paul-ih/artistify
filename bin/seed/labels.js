require("../../config/mongo");
const LabelModel = require("../../model/labelsModel");

const dataLabel = [
  {
    name: "Alexis Records",

    city: "Paris",

    country: "France",

    street: "rue de Belleville",

    streetNumber: 42,

    zipCode: "75019",
  },
  {
    name: "Empire",

    city: "Detroit",

    country: "USA",

    street: "Obama Street",

    streetNumber: 2145,

    zipCode: "9900",
  },
  {
    name: "Juan Recuerdos",

    city: "Quito",

    country: "Ecuador",

    street: "via del Recuerdo",

    streetNumber: 86,

    zipCode: "1986",
  },
];

LabelModel.create(dataLabel)
  .then((labelDB) => {
    console.log(labelDB);
  })
  .catch((err) => {
    console.log(err);
  });
