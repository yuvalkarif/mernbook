import express from "express";
import mongodb from "./configs/database";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mongodb();

app.get("/", (req, res) => {
  res.send("welcome to node with babel");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express applictaion is listening on port ${port}`);
});
