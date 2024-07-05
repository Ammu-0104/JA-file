import React from "react";
// import JobHeader from "./JobHeader";
import JobBreadcrums from "./JobBreadcrums";
import JobActivity from "./JobActivity";
import JobHeader from "./JobHeader";



const MyActivity = () => {
  return (
    <div className="myActive">
      <JobHeader />
      <JobBreadcrums />
      <JobActivity />
    </div>
  );
};

export default MyActivity;
