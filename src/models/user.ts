import { IUser } from "@/interfaces/IUser";
import mongoose from "mongoose";

const user = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    match: [/.+@.+\..+/, "Please enter a valid email addres"],
    index: true,
    password: String,
  },

  password: String,
});

export default mongoose.model<IUser | mongoose.Document>("User", user);
