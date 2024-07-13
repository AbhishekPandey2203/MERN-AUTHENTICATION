import React from "react";

//step
import { Outlet, Navigate } from "react-router-dom";

//step
import { useSelector } from "react-redux";

//step first import the current user

export default function PrivateRoute() {
  //get current user
  const { currentUser } = useSelector((state) => state.user);
  //agr user h toh redirect krdo profile page dekho


  //return statement show kr raha h ki agar current user h toh navigate krdo uske child jo hume outlet se milega varna navigate krdo sigin pe

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
