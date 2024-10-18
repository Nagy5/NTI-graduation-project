const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const dbConnection = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected with db successfully\n`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConnection;
