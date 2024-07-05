import React from "react";
import ViewBreadcrums from "./ViewBreadcrums";
import Viewed from "./viewed";
import ViewHeader from "./ViewHeader";
import "../MyActivityViewed/MyView.css";



const MyViewedActivity = () => {
  return (
    <div className="myActive">
      <ViewHeader />
      <ViewBreadcrums />
      <Viewed />
    </div>
  );
};

export default MyViewedActivity;
