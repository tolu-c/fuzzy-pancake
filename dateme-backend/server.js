import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware

// db config

// api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
