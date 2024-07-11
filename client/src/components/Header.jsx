import { Link } from "react-router-dom";

// Now understanding the making of How a header component make using the help of tailwind-css
// now for making home sigin signup one we make under it using the lsit component

//learning some property of css-->
//using the flex:-side-side ke liye
//justify between: do kono m fekne ke liye
//item-center :to center the item
// gap : used to give between the home signin signup

// ----> Understanding about the adding the --click on home to move other
//so using link from react-router-dom to avoid the refresh of page-->
//ab link m humne to='/' m jo path define kiya h vo kya h
// let jab hum uspe click krenge toh vo re-direct krdega hume unpe(pages up)

// routes set up kr diya

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">AUTH-LR</h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            {" "}
            <li>Sign IN</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
