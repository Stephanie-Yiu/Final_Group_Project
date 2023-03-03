const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 6,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
