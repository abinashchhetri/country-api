import express from "express";
import config from "./config";

async function startServer() {
  const server = express();

  (await import("@/loaders")).default({ server });

  server.listen(config.port, () => {
    console.log(`server started at port ${config.port}`);
  });
}

startServer();
