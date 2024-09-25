import express from "./express";

export default ({ server }) => {
  express({ server });
  console.log("express loaded ");
};
