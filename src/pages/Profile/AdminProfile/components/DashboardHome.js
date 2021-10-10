import React, { useEffect, useState } from "react";

const cartInfo = [
  {
    id: 1,
    title: "Total Revenue",
    data: "$3249",
    iconBg: "green-600",
  },
  {
    id: 2,
    title: "Total Users",
    data: "49",
    iconBg: "pink-600",
  },
  {
    id: 3,
    title: "New Users",
    data: "10",
    iconBg: "yellow-600",
  },
  {
    id: 4,
    title: "Server Uptime",
    data: "100 Days",
    iconBg: "blue-600",
  },
  {
    id: 5,
    title: "To do List",
    data: "6 Tasks",
    iconBg: "indigo-600",
  },
  {
    id: 6,
    title: "Issues",
    data: "2",
    iconBg: "red-600",
  },
];

const DashboardHome = () => {

  return (
    <main className="w-full relative">
      {/* cartInfo */}
      <div className="flex flex-wrap">
        {cartInfo.map(({ id, title, data, iconBg }) => (
          <div key={id} className="w-full md:w-1/2 xl:w-1/3 p-3">
            <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className={`rounded p-3 bg-${iconBg}`} />
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-400">{title}</h5>
                  <h3 className="font-bold text-3xl text-gray-600">{data}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </main>
  );
};

export default DashboardHome;
