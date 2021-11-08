import axios from "axios";
import { useState } from "react";

interface LoginProps {
  renderSignup: () => void;
}

const Login = ({ renderSignup }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ state: false, msg: "" });
  const [success, setSuccess] = useState({ state: false, msg: "" });

  const onSubmit = () => {
    axios
      .post("https://jb-mern-todo.herokuapp.com/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          //store token
          let token = res.data.token;

          localStorage.setItem("token", token);
          setSuccess({
            state: true,
            msg: "Login success redirecting to dashboard",
          });
          setTimeout(() => {
            setSuccess({ state: false, msg: "" });
            window.location.href = "/dashboard";
          }, 3000);
        } else {
          if (res.status === 400 || res.status === 401) {
            setError({
              state: true,
              msg: "Invalid username or Password",
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex-col w-3/4 mx-auto md:w-3/4 sm:w-1/2 ">
      <h1 className="text-2xl font-bold text-center text-green-400">Login</h1>
      {error.state && (
        <div
          className="relative px-4 py-3 mt-4 mb-4 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">error.msg</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="w-6 h-6 text-red-500 fill-current"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {success.state && (
        <div
          className="px-4 py-3 mt-4 mb-4 text-green-900 bg-green-100 border-t-4 border-green-500 rounded-b shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="w-6 h-6 mr-4 text-green-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">{success.msg}</p>
              <p className="text-sm">We wish you the best</p>
            </div>
          </div>
        </div>
      )}
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

      <div className="flex items-center justify-between">
        <div className="">
          Don't have account?{" "}
          <span
            className="font-bold text-green-400 cursor-pointer"
            onClick={renderSignup}
          >
            Signup
          </span>
        </div>
        <button
          onClick={onSubmit}
          className="px-6 py-2 font-bold text-white bg-green-400 rounded-sm hover:bg-green-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
