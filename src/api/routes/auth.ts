import { Router } from "express";
import { RoutesPropsType } from "./types";

const authRouter = Router();
export default ({ router }: RoutesPropsType) => {
  router.use("/auth", authRouter);

  authRouter.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
  });
};
