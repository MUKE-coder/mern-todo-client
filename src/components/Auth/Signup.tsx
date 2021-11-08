import { useEffect, useState } from "react";
import axios from "axios";
interface SignupProps {
  renderLogin: () => void;
}
const Signup = ({ renderLogin }: SignupProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = () => {
    axios
      .post("/signup", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    if (password !== confirmPassword) setIsDisabled(true);
    else setIsDisabled(false);
  }, [password, confirmPassword]);
  return (
    <div className="flex-col w-3/4 mx-auto md:w-3/4 sm:w-1/2 ">
      <h1 className="text-2xl font-bold text-center text-green-400">Signup</h1>
      <div className="mb-4">
        <label className="mb-2 font-bold" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          placeholder="username"
          className="w-full p-3 px-3 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 font-bold" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="username"
          className="w-full p-3 px-3 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 font-bold" htmlFor="password">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="username"
          className="w-full p-3 px-3 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="">
          Already have account?{" "}
          <span
            className="font-bold text-green-400 cursor-pointer"
            onClick={renderLogin}
          >
            Login
          </span>
        </div>
        <button
          onClick={() => onSubmit()}
          className={`px-6 py-2 font-bold text-white ${
            isDisabled ? "bg-gray-400" : "bg-green-400"
          } rounded-sm hover:bg-green-600`}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
