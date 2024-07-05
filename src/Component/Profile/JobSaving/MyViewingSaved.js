import React from "react";
import JobBreadcrums from "./JobBreadcrums";
import JobViewingActivity from "./JobViewingActivity";
import JobHeader from "./JobHeader";
import SavedJobs from "./SavedJobs";
import "../JobSaving/saved.css";





const MyViewingActivity = () => {
  return (
    <div className="myActive">
      <JobHeader />
      <JobBreadcrums/>
      <SavedJobs/>
      < JobViewingActivity/>
    </div>
  );
};

export default MyViewingActivity;
