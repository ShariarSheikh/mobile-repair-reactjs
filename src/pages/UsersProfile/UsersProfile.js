import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";

const UsersProfile = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <h1 className="text-black text-6xl align-center">
        Welcome {auth.displayName}
      </h1>
    </div>
  );
};

export default UsersProfile;
