import mongoose, { get } from "mongoose";

const { Schema } = mongoose;

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    comments: {
      type: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          text: { type: String, required: true },
          createdAt: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export { postSchema };
