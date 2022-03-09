const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://arnavi:arnavi@cluster0.unn3p.mongodb.net/hospital?retryWrites=true&w=majority"
  );
};
//mongodb+srv://aakash:aakash123@cluster0.hurs4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority