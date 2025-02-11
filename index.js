import dotenv from "dotenv";
import express from "express";
import mongoose, { connect } from "mongoose";

import { User } from "./src/db/models/user.js";

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("mongo connected");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.post("/user", async (req, res) => {
  try {
    await User.create({
      username: "Tommy76",
      profilePic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Ffeatures%2Fking-kong-film-original-skull-island%2F&psig=AOvVaw2Sk_Rl0hHJZm0JpwuunEPk&ust=1739270464273000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi9_cn1uIsDFQAAAAAdAAAAABAx",
      followers: ["{}"],
      following: ["{}"],
      createdAt: new Date("2022-06-01"),
      updatedAt: new Date("2024-04-30"),
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.get("/user", async (req, res) => {
  const { userid } = req.query;

  if (!userid) {
    res.json({ success: false, message: "userid required" });
  }

  const users = await User.findOne({ _id: { $eq: userid } });

  res.json({ success: true, data: { users } });
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
