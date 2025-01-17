// //why controller-->

// import User from "../models/usermodel.js";
// import { errorHandler } from "../utilis/error.js";
// import { URLSearchParams } from "url";

// import bcryptjs from "bcryptjs";

// //as controller is best practice to understand and define about the routes --->the functionality of routes we can define here

// export const test = (req, res) => {
//   res.json({
//     message: "API is working",
//   });
// };

// //define about the updateuser functionality ---------->

// export const updateUser = async (req, res, next) => {
//   const { id } = req.params;
//   if (req.user.id !== id) {
//     // return res.status(401).json("You can update only your account!");
//     return next(errorHandler(401, "You can update only your Account!"));
//   }

//   try {
//     if (req.body.password) {
//       req.body.password = bcryptjs.hashSync(req.body.password, 10);
//     }

//     const updateUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//           profilePicture: req.body.profilePicture,
//         },
//       },

//       { new: true }
//     );

//     //this updated user also contain password hence we remove or can say separate the password
//     const { password, ...rest } = updateUser._doc;

//     res.status(200).json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

// //req.params.id is basically jo router m /update/:id vo h

// // delete user functionality
// export const deleteUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id) {
//     return next(errorHandler(401, "You can delete only your account!"));
//   }
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("User has been deleted...");
//   } catch (error) {
//     next(error);
//   }
// };

import User from "../models/usermodel.js";
import { errorHandler } from "../utilis/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API is working!",
  });
};

// update user

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// delete user

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};
