// separate controller for authentication-------->

import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utilis/error.js";

// req jo client side se milega aur response jo hum bejenge--->
// export const signup = (req, res) => {
//   console.log(req.body);
// };

//so database m kase data ko save krenge---> like console.log(req.body se data humko milgya h-->)
//steps are : phele destructure krenge --> jo bhi hume req.body se mil raha ushe, destructure krenge
//const{name,email,password}=req.body;

//+++++++++++Learning how to save data in database:++++++++++++

export const signup = async (req, res, next) => {
  //phele step m req.body se fetch kra aur ushe destructure kiya
  const { username, email, password } = req.body;

  //   ++++++Password to hash hashpassword how+=========

  const hashedPassword = bcryptjs.hashSync(password, 10);

  //create a new user using our model user we create:har time ek new user banega
  const newUser = new User({ username, email, password: hashedPassword });
  //we use the await bcz-->it is take time to save in database

  //Now+++understand why we use the try catch functionality-->bcz we want to know the error if it occur while snding the data to the database

  try {
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    // res.status(500).json(error.message);
    //using of middleware fucntionality--->
    next(error);
  }
};

//++++++++++understanding of using the bcyrptjs --->to hash the password++++++++
// steps are: password mila
