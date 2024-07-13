//authentication---part
import express from "express";
import { google, signin, signup ,signout} from "../controllers/authcontroller.js";

const router = express.Router();

//our first auth post method-->signup

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google",google);
router.get("/signout",signout);


//ab ye post method h so we cannot u our browser to test it and hence use postmanapi -->

//ab google route pe ja kr kya hoga ye hum define krenge controller section m
export default router;
