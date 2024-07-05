import React from "react";
import JobBreadcrums from "./JobBreadcrums";
import JobHeader from "./JobHeader";
import "../JobSaving/saved.css";
import JobPostedSrc from "./JobPostedSrc";
import SavedJobsOne from "./SavedJobs";





const JobPosted = () => {
  return (
    <div className="myActive">
      <JobHeader />
      <JobBreadcrums/>
      <SavedJobsOne/>
      <JobPostedSrc/>

    </div>
  );
};

export default JobPosted;
