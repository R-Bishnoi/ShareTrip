const mongoose = require("mongoose");

const { Schema } = mongoose;
//Ride_offer Schema
const RideOfferSchema = new Schema({
  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique:true
  },
  date:{
    type: String, // changed to string type
    required: true,
    match: /^\d{1,2}\/\d{1,2}\/\d{4}$/ // added a regular expression pattern to match dd/mm/yyyy format
  },
  source:{
    type: String,
    required: true,
  },
  destination:{
    type: String,
    required: true,
  },
  stime:{
    type: String, // or you can use the 'Date' data type for start and end time as well
    required: true
  },
  etime:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true,
  },
  description:{
    type: String,  // 'string' should start with lowercase letter, and also it's not a built-in data type in JavaScript
  },
  report:{
    type: String,  // 'string' should start with lowercase letter, and also it's not a built-in data type in JavaScript
  }
}); 


module.exports = mongoose.model("Rideoffer", RideOfferSchema);