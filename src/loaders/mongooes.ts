import config from "@/config";
import mongoose from "mongoose";

export default async () => {
  await mongoose.connect(config.mongo_api);
};
