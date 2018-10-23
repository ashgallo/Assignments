const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema( {
  name: {
    type: String,
    require: true
  },
  description: String,
  price: {
    type: Number,
    require: true
  },
  makesNoise: {
    type: Boolean,
    default: true
  }
});

//export the schema, the individual thing is singular & capitalized
module.exports = mongoose.model("Item", itemSchema)