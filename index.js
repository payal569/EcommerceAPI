const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoute = require("./routes/product");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());

  // URL will be like http://localhost:5000/ecommerce
app.use("/ecommerce", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running...");
  console.log( mongoose.Types.ObjectId );
});     
