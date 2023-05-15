// Start Requires
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
// End Requires

const app = express();

// The start of the app
const port = process.env.PORT || 5000;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("Connected to database...");
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};

start();
