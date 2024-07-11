//now understanding about the routes

//so importing the some important routes

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

// everything now cover under the browser route-->
//ab browser route h now unke andar routes and then sepcify each routes

// Now one thing i Learn as a shortcut--> like mane home likha ushe import krna h toh m
//generally home then space-->

//Alt-shift-downarrow to cpy fast

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
