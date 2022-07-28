const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const topUpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["140 rs topup for a month for podcast", "270rs topup for a month for musics", "500 rs topup for a month for movies","720 rs topup for a month for music and movies"],
      required: true
      
    },
    userId: {
    type: ObjectId,
    required: true,
    ref: "user"}},{timestamps:true})
    module.exports = mongoose.model("topUp", topUpSchema);