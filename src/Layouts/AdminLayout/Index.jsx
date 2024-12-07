import React from "react";
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Slidebar />
      <div className="flex-1">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
