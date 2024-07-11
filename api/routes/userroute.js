import express from "express";
import { test } from "../controllers/usercontroller.js";

const router = express.Router();

//vhi h ki routes batates h ki kaha jana aur vaha kya hoga

router.get("/", test);

//smje test kaha se aa raha h ye router controller se--->

export default router;

//jise hum default export ushe kisi aur name se bhi import krskte h
//router ko kr rhe but index.js m userroute ko import kr rhe h
