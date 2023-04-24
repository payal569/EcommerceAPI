const mongoose = require("mongoose");
// Schema to specify types of fiels
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  quantity: { type: String, required: true },
  // _id: { required: true, unique: true},
});

module.exports = mongoose.model("Product", ProductSchema);
