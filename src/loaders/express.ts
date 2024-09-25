import { Application } from "express";

export type ExpressLoaderType = {
  server: Application;
};

export default ({ server }: ExpressLoaderType) => {
  server.get("/status", (req, res) => {
    res.status(200).end();
  });
};
