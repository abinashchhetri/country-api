import { Router } from "express";
import { RoutesPropsType } from "./routes/types";
import auth from "./routes/auth";
export default () => {
  const router = Router();
  auth({ router });
};
