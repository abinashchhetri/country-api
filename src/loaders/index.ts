import user from "@/models/user";
import dependencyInjector from "./dependencyInjector";
import express from "./express";
import mongooes from "./mongooes";

export default async ({ server }) => {
  try {
    express({ server });
    console.log("express loaded ");

    await mongooes();
    console.log("connected to database");

    dependencyInjector([{ name: "UserModel", model: user }]);
    console.log("dependency injected");
  } catch (error) {
    console.log(error);
  }
};

