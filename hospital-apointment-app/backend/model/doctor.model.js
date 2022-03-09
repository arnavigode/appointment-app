const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    fees: { type: Number },
    profile_pic: { type: String },
    speciality: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("doctor", userSchema);