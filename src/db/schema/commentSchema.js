import mongoose, { get } from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export { commentSchema };
