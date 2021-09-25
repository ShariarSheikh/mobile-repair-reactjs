import React from "react";


const DashboardHome = ({user}) => {

  return (
    <div>
       <div className="w-80 bg-gray-100 py-3 px-2">
        <img className="w-32 h-32 object-cover bg-gray-500" src="" alt="user" />
        <h1 className="text-black text-xl mt-3">{user.name}</h1>
        <p>{user.email}</p>
       </div>
      
    </div>
  );
};

export default DashboardHome;
