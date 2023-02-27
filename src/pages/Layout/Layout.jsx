import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./layout.scss";
const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
