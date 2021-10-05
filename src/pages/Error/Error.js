import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <div className="h-screen w-full flex flex-col space-y-6 items-center justify-center">
      <h1 className="text-black text-6xl align-center">Error page</h1>
      <p onClick={() => history.goBack()} className="cursor-pointer">Back to Home page</p>
    </div>
  );
};

export default Error;
