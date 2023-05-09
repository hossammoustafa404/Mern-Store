// Start Requires
require("dotenv").config();
const express = require("express");
// End Requires

const app = express();

// The start of the app
const port = process.env.PORT || 5000;
const start = async () => {
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};

start();
