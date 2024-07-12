import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// my- meaning margin from top and bottom -7

//create a form
//using*************** flex  is vimp for next to each othersbse phele form m to next to each other
// flex -col to change the direction of flex

//conncet to wall

export default function SigIn() {
  // define usestate to store the fucntionality of the input changeevent

  const [formData, setFormData] = useState({});

  // to show and loading while user sigup ------->

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  //useNavigate to navigate from the signIN to page to HomePage -->
  const navigate=useNavigate();

  // define the handlechange ye jo e vo ek event ko represent kr raha h

  const handleChange = (e) => {
    //  undertand about the "spread operator"... dot se repersent hota e.g. ...formdata
    //jo bhi m type kr raha hu har input ke liye ushe form m store kr leta jise vo lost na ho aur ye hume help krta h data ko reserve krne m and store krne m database m
    //e.g username type kiya store krlega , then email type krega toh username lost nhi hoga yhi h spread operator ka use...
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //    console.log(formData);

  // +++++++++AB ye sikh rhe ke kase data ko database m save krye...
  //ab ye jo function ye asyn hoga bcz time lagta h database m save krne m

  const handleSubmit = async (e) => {
    // how understand the use of preventdefault--it help to prevent the referesh of page while submit mtlb signup button pe clcik pe page refresh nhi hoga-->
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      // after that we make a request for our backend-->
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);

      setLoading(false);
      //o view error-->
      if (data.success === false) {
        setError(true);
        return;
      }

      //if everthing ok!!--we just navigate to homepage-->
      navigate('/');




    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "SignIn"}
        </button>
      </form>

      {/* using the another div for have an account functionality-- */}

      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>

        <Link to="/sign-up">
          <span className="text-blue-600">Sign Up</span>
        </Link>
      </div>

      <p className="text-red-700 mt-5">{error && "Something went Wrong"}</p>
    </div>
  );
}

// ------------Now we try to understand about the how functionality of sign up page add and connect to the database
// ------steps are-->
// 1.onchange event handler we used at the each input criteria. and define that function on above of the starting of react component
// -------now how to save data in database----
// form m onsubmit functionaality

// ----------understanding about the cors policy--------
// dekho generally kya 3000, 5173 dono alag port pe h now cors policy ban kr denge isse
//add proxy
