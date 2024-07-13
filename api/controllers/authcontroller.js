// // separate controller for authentication-------->

// import User from "../models/usermodel.js";
// import bcryptjs from "bcryptjs";
// import { errorHandler } from "../utilis/error.js";

// import jwt from "jsonwebtoken";

// // req jo client side se milega aur response jo hum bejenge--->
// // export const signup = (req, res) => {
// //   console.log(req.body);
// // };

// //so database m kase data ko save krenge---> like console.log(req.body se data humko milgya h-->)
// //steps are : phele destructure krenge --> jo bhi hume req.body se mil raha ushe, destructure krenge
// //const{name,email,password}=req.body;

// //+++++++++++Learning how to save data in database:++++++++++++

// export const signup = async (req, res, next) => {
//   //phele step m req.body se fetch kra aur ushe destructure kiya
//   const { username, email, password } = req.body;

//   //   ++++++Password to hash hashpassword how+=========

//   const hashedPassword = bcryptjs.hashSync(password, 10);

//   //create a new user using our model user we create:har time ek new user banega
//   const newUser = new User({ username, email, password: hashedPassword });
//   //we use the await bcz-->it is take time to save in database

//   //Now+++understand why we use the try catch functionality-->bcz we want to know the error if it occur while snding the data to the database

//   try {
//     await newUser.save();
//     res.status(201).json({ message: "User Created Successfully" });
//   } catch (error) {
//     // res.status(500).json(error.message);
//     //using of middleware fucntionality--->
//     next(error);
//   }
// };

// //++++++++++functionality for the signin page+++++++++++

// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;

//   try {
//     //sabse phele email search krenge database m , by default function of database known as findone
//     const validUser = await User.findOne({ email });

//     //check krenge --so pass it to middleware for handling
//     if (!validUser) return next(errorHandler(401, "User Not found"));

//     // now ab agar if fail mean user exist , then we have to check passwod
//     const validpassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validpassword) return next(errorHandler(401, "Wrong Credentails"));

//     //But agar dono shi user bhi aur password bhi------>to h hum ek token add kenge browaer m
//     //token ek hash value of unique thing of user either email ,password used to later verify the user
//     //bar bar backend m jana se ache vhi cookie se call kra lenge

//     //creating a web token-> token m only add honge unique things
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

//     // it is a bad practice to sent the password at the client side, so destructure it password bhar likal liya aur baki sab hashed password m bej diya

//     //validuser._doc issme use jo _doc vo ek start point h mongodb ek andar ka bydefault islye use krna hoga
//     const { password: hashedPassword, ...rest } = validUser._doc;

//     //
//     const expiryDate = new Date(Date.now() + 3600000); //1hour

//     //put the cookie at the client side,inside the browser cookie
//     res
//       .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

// // making a functionality what they do for google routing
// export const google = async (req, res, next) => {
//   //now what they do
//   try {
//     //user ko find kiya
//     const user = await User.findOne({ email: req.body });
//     //if user already exist
//     if (user) {
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//       // it is a bad practice to sent the password at the client side, so destructure it password bhar likal liya aur baki sab hashed password m bej diya

//       //validuser._doc issme use jo _doc vo ek start point h mongodb ek andar ka bydefault islye use krna hoga
//       const { password: hashedPassword, ...rest } = user._doc;

//       //
//       const expiryDate = new Date(Date.now() + 3600000); //1hour

//       //put the cookie at the client side,inside the browser cookie
//       res
//         .cookie("access_token", token, {
//           httpOnly: true,
//           expires: expiryDate,
//         })
//         .status(200)
//         .json(rest);
//     } else {
//       //now if new user from google authe we create a password for them

//       const generatedPassword =
//         Math.random().toString(36).slice(-8) +
//         Math.random().toString(36).slice(-8);

//       //now jo password generate hua usko hash m krna hoga

//       const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

//       //ab humne ek new user bnaya h aur user name unique krne ke liye itna sb kuch kiya h
//       const newUser = new User({
//         username:
//           req.body.name.split(" ").join("").toLowerCase() +
//           Math.random().toString(36).slice(-8),
//         email: req.body.email,
//         password: hashedPassword,
//         profilePicture: req.body.photo,
//       });

//       //database m save krna

//       await newUser.save();

//       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

//       // it is a bad practice to sent the password at the client side, so destructure it password bhar likal liya aur baki sab hashed password m bej diya

//       //validuser._doc issme use jo _doc vo ek start point h mongodb ek andar ka bydefault islye use krna hoga
//       const { password: hashedPassword2, ...rest } = newUser._doc;

//       //
//       const expiryDate = new Date(Date.now() + 3600000); //1hour

//       //put the cookie at the client side,inside the browser cookie
//       res
//         .cookie("access_token", token, {
//           httpOnly: true,
//           expires: expiryDate,
//         })
//         .status(200)
//         .json(rest);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// //++++++++++understanding of using the bcyrptjs --->to hash the password++++++++
// // steps are: password mila

// // creating a signout functionality--->
// export const signout = (req, res) => {
//   res.clearCookie("access_token").status(200).json("Signout success!");
// };

import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utilis/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie("access_token").status(200).json("Signout success!");
};
