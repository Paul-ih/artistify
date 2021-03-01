<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/Artistify', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
=======
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Artistify", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
>>>>>>> 514fb56388e22833651ba397771d6a70c88d0c3b
