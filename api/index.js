//Let now understand this part --->
//the folder name APi is generally a folder for backend
//now the file name is index.js---->let understand it is our main file
//if we want that it name to other we should also do a change in oure package.json
// bcz main:"index.js" in package .json

//Backend working -->

import express from "express";

//making an app

const app = express();

//server listening at the 3000 port no

app.listen(3000, () => {
  console.log("Server is listening at the port 3000 ");
});



//why we install nodemon -->the reason behind the seen is that it help to automatically run the server at any change