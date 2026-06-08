import React , {useState} from "react";
import Header from "./Header";


const Login = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleToggle = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
        <h1 className="font-bold text-3xl py-4">{isSignedUp ? "Sign Up" : "Sign In"}</h1>
        {isSignedUp && <input type="text" placeholder="Full Name" className="p-4 my-4  w-full bg-gray-700" />}
        <input type="email" placeholder="Email address" className="p-4 my-4  w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-4 my-4  w-full bg-gray-700" />
        <button className="p-4 my-6 bg-red-600 hover:bg-red-700 w-full rounded-lg cursor-pointer">{isSignedUp ? "Sign Up" : "Sign In"}</button>
        <p className="py-4">{isSignedUp ? "Already have an account?" : "New to Stream-ai?"} <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => handleToggle()}>{isSignedUp ? "Sign In" : "Sign Up"}</span></p>
      </form>
    </div>
  );
};

export default Login;
