import React from "react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const Landing = () => {
  const [isSignup, setIsSignup] = React.useState<Boolean>(false);
  return (
    <div className="flex-col items-center justify-center w-full h-screen grid-cols-2 md:gap-0 md:grid font-zen">
      <div className="flex flex-col items-center w-full font-bold bg-indigo-900 h-1/4 md:h-screen justify-evenly">
        <h1 className="text-3xl text-white md:text-5xl">
          Welcome {isSignup ? "" : "Back"} to
          <span className="ml-2 text-green-400">Notey</span>
        </h1>
        <div className="w-1/2 h-2 m-4 bg-green-400 rounded-full md:h-4 " />
        <h3 className="text-xl text-white md:text-3xl">
          {isSignup ? "Signup" : "Login"} to {isSignup ? "Create" : "View"} your
          Notes
        </h3>
      </div>
      <div className="w-full p-3 m-auto md:p-0 ">
        {(isSignup && <Signup renderLogin={() => setIsSignup(false)} />) || (
          <Login renderSignup={() => setIsSignup(true)} />
        )}
      </div>
    </div>
  );
};

export default Landing;
