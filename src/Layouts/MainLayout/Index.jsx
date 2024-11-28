import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="relative h-screen">
      <div className="sticky left-0 w-full z-50 bg-opacity-80 backdrop-blur-md">
        <Navbar />
      </div>
      <div className="mt-[-110px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
