import express from "express";
import passport from "passport";
import session from "express-session";
import mongodb from "./configs/database";
import apiRouter from "./routes/api";
import dotenv from "dotenv";
import passportConfig from "./configs/passport";
import { errorHandler } from "./helpers/error";
dotenv.config();

//Initilizing
const app = express();

//Connecting to DB
const db = mongodb();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

//Routing
app.use("/api", apiRouter);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("welcome to node with babel");
});

//Activating
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express applictaion is listening on port ${port}`);
});
