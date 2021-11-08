import axios from "axios";
import { useEffect, useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  useEffect(() => {
    axios
      .get("/user", { headers: { token: localStorage.getItem("token") } })
      .then((res) => {
        const user = res.data.user.username;
        setLoggedInUser(user);
      });
  }, []);
  return (
    <div className="grid h-screen ">
      <div className="grid grid-cols-6 grid-rows-6">
        <div className="grid items-center col-span-6 mb-1 border-b border-gray-300">
          <Navbar loggedInUser={loggedInUser} />
        </div>
        <div className="col-span-1 row-span-5 ">
          <Sidebar />
        </div>
        <div className="flex-col col-span-5 row-span-5 bg-gray-100">
          {/* <div className="align-right">
            <p>{loggedInUser}</p>
          </div> */}
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
