const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    profile_pic: { type: String },
    adress: { type: Number },
    doctor_id: [{type: Schema.Types.ObjectId,
        ref: "doctor",},],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new model("hospital", userSchema);