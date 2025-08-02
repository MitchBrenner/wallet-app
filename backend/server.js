// const express = require("express");
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("It's working!");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
