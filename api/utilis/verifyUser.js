//to verify the user

import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  //if person verify go to next

  const token = req.cookies.access_token;

  //check token is valid or not
  if (!token) return next(errorHandler(401, " You are not authenticated"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid"));

    req.user = user;
    next();
  });
};

//ye jo next h ye bata h ki agar sab kuch shi h toh verifytoken ke side m jo updateuser wala function h ushe pe jaow smje...islye we use next
