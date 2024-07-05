import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";

const Main = () => {
  return (
    // <div className="">
    //   <Sidebar />
    //   <div>
    //     <Outlet />
    //   </div>
    // </div>
    <div className="main">
    <div className="d-md-block d-none">
      <Sidebar />
    </div>
    <div className="content">
      <div className="">
        <Outlet />
      </div>
    </div>
  </div>
  );
};

export default Main;
