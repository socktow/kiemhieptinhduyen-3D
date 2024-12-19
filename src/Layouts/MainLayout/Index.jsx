import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/home";

  return (
    <div className="relative">
      <div className="relative left-0 w-full z-50 bg-opacity-80 backdrop-blur-md">
        <Navbar />
      </div>
      <Outlet />
      {!isLandingPage && <Footer />}
    </div>
  );
};

export default MainLayout;
