import React from "react";
import JobBreadcrums from "./JobBreadcrums";
import ActivePosting from "./ActivePosting";
import JobHeader from "./JobHeader";

const MyActivitePosting = () => {
  return (
    <div className="myActive">
      <JobHeader/>
      <JobBreadcrums/>
      <ActivePosting/>
    </div>
  );
};

export default MyActivitePosting;
