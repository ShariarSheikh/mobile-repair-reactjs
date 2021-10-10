import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { removeUser } from "../../../../redux/userSlice/userSlice";

const Setting = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch(removeUser());
    history.push("/");
  };
  return (
    <div>
      <button
        type="submit"
        className="pt-2 pb-2 pr-3 pl-3 bg-indigo-800 text-white rounded cursor-pointer mt-10"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Setting;