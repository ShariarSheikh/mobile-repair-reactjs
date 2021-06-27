import React, { useContext } from "react";
import { AuthContext } from "../../../components/AuthContext/AuthContext";

const DashboardHome = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-black text-4xl align-center">
        Good Morning <span className="text-indigo-400">{auth.displayName}</span>
      </h1>
      <h1>Home</h1>
    </div>
  );
};

export default DashboardHome;
