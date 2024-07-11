//Let now understand this part --->
//the folder name APi is generally a folder for backend
//now the file name is index.js---->let understand it is our main file
//if we want that it name to other we should also do a change in oure package.json
// bcz main:"index.js" in package .json

//Backend working -->

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//initiliaze the dotenv

dotenv.config();

//after making a server our next target is to connect the server to the database

//we install mongoose

//now connect mongoose to the server
mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

//making an app

const app = express();

//server listening at the 3000 port no

app.listen(3000, () => {
  console.log("Server is listening at the port 3000 ");
});

//why we install nodemon -->the reason behind the seen is that it help to automatically run the server at any change
//now understanding the database that we config for the mongodbatlas

//steps are:
//newproject->name->add 0.0.0.0 wala addrress then conncet then cpy url password wala then mongoose.conncet

//to check it return promise so handle it with the then and catch
