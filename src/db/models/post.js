import mongoose from "mongoose";
import { postSchema } from "../schema/postschema.js";

export const post = mongoose.model("post", postSchema);
