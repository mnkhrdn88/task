import mongoose, { get } from "mongoose";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    profilePic: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    followers: {
      type: [String],
      required: false,
    },
    following: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

export { userSchema };
