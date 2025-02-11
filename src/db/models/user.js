import mongoose from "mongoose";
import { userSchema } from "../schema/userschema.js";
export const User = mongoose.model("User", userSchema);
