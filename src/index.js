import express from "express";
import passport from "passport";
import session from "express-session";
import mongodb from "./configs/database";
import apiRouter from "./routes/api";
import dotenv from "dotenv";
import passportConfig from "./configs/passport";
import { errorHandler } from "./helpers/error";
import compression from "compression";
import helmet from "helmet";
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
app.use(compression());
app.use(helmet());
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

//Routing
app.use("/api", apiRouter);
app.use(errorHandler);

//Activating
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express applictaion is listening on port ${port}`);
});
