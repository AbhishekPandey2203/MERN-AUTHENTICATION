//now understanding about the routes

//so importing the some important routes

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

// everything now cover under the browser route-->
//ab browser route h now unke andar routes and then sepcify each routes

// Now one thing i Learn as a shortcut--> like mane home likha ushe import krna h toh m
//generally home then space-->

//Alt-shift-downarrow to cpy fast

// ------------------------------------------------------

//Learning the implementation of Common Nav-bar
//so generally we want Ki Navbar Available sabhi routes pe-->
//how to do--> Between browserroutes and  routes we can make a Nav-bar Available to all Routes

export default function App() {
  return (
    <BrowserRouter>
      {/*  If we create Header here we get a chance to Available it to all pages*/}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// Jo profile h ushe cover krenge apne private route se
