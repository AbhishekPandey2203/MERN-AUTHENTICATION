//authentication---part
import express from "express";
import { signup } from "../controllers/authcontroller.js";

const router = express.Router();

//our first auth post method-->signup

router.post("/signup", signup);

//ab ye post method h so we cannot u our browser to test it and hence use postmanapi -->

export default router;
