const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV == "test") {
    await mongoose.connect(process.env.DB_URL);
    console.log("Mongoose connected with test Database!")
  } else {
    await mongoose.connect(process.env.DB_URL);
    console.log("Mongoose connected !")
  }
  
}

module.exports = main;