import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// mongoose connection url
const connection_url =
  "mongodb+srv://admin:yaA8q7t1tyyn27Tk@cluster0.ikv9v.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(Cors());
app.use(express.json());

// db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World! now in heroku");
});

// get all cards
app.get("/api/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// create card
app.post("/api/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
