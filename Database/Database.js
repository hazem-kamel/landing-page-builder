const mongoose = require("mongoose");

const URI =
  "mongodb+srv://appgain123:appgain123@landing-wqx8n.mongodb.net/<dbname>?retryWrites=true&w=majority";
const connectDB = async () => {
  //mongoose package to deal with the DB
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Database Connected...");
};
module.exports = connectDB;
