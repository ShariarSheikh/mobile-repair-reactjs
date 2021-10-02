import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-full flex flex-col space-y-6 items-center justify-center">
      <h1 className="text-black text-6xl align-center">Error page</h1>
      <Link to="/">Back to Home page</Link>
    </div>
  );
};

export default Error;
