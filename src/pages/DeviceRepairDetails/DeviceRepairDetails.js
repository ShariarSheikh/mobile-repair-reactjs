import queryString from "querystring";
import React from "react";
import { useLocation } from "react-router-dom";

const DeviceRepairDetails = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const name = parsed.name;
  const id = parsed.id;

  return (
    <main className="w-full h-auto">
      <section className="w-3xl m-auto flex justify-center min-h-screen">
        <h1>name {name}</h1>
        <h1>id {id}</h1>
      </section>
    </main>
  );
};

export default DeviceRepairDetails;
