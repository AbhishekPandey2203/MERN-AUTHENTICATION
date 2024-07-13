import express from "express";
import { test, updateUser,deleteUser } from "../controllers/usercontroller.js";
import { verifyToken } from "../utilis/verifyUser.js";

const router = express.Router();

//vhi h ki routes batates h ki kaha jana aur vaha kya hoga

router.get("/", test);

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id",verifyToken, deleteUser);


//updateuser ko define krenge controller ke andar
//smje test kaha se aa raha h ye router controller se--->

export default router;

//jise hum default export ushe kisi aur name se bhi import krskte h
//router ko kr rhe but index.js m userroute ko import kr rhe h
