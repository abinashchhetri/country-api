import { IUser } from "@/interfaces";
import { Model, Document } from "mongoose";

declare global {
  namespace Models {
    export type UserModel = Model<IUser | Document>;
  }
}
