// Start Requires
require("express-async-errors");
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const productsRouter = require("./routes/products");
// End Requires

const app = express();

// Some Middelwares
app.use(express.json());

// Routes
app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// The start of the app
const port = process.env.PORT || 5000;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("Connected to database...");
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};

start();
