import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="relativen">
      <div className="relative left-0 w-full z-50 bg-opacity-80 backdrop-blur-md">
        <Navbar />
      </div>
        <Outlet />
    </div>
  );
};

export default MainLayout;
