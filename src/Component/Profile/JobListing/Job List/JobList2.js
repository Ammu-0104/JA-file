import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList2() {
  const [jobs] = useState([
    { id: 1, title: "Advertising & Creative" },
    { id: 2, title: "Artificial Intelligence" },
    { id: 3, title: "Blockchain Development" },
    { id: 4, title: "BPO/KPO" },
    { id: 5, title: "Business Analytics and Intelligence" },
    { id: 6, title: "Cloud Computing" },
    { id: 7, title: "Computer & Network Security" },
    { id: 8, title: "Computer Games" },
    { id: 9, title: "Computer Software" },
    { id: 10, title: "Information Services" },
    { id: 11, title: "Data Science" },
    { id: 12, title: "Data Architecture" },
    { id: 13, title: "Database Administration" },
    { id: 14, title: "Digital Marketing" },
    { id: 15, title: "Cybersecurity" },
    { id: 16, title: "Content Management" },
    { id: 17, title: "Tech Recruitment" },
    { id: 18, title: "Machine Learning" },
    { id: 19, title: "Product Development" },
    { id: 20, title: "Project Management / SCRUM" },
    { id: 21, title: "Full Stack Development" },
    { id: 22, title: "Big Data" },
    { id: 23, title: "Software Development" },
    { id: 24, title: "System and Network Administration" },
    { id: 25, title: "Tech Start-ups" },
    { id: 26, title: "DevOps" },
    { id: 27, title: "IT Support and Security" },
    { id: 28, title: "IT Network" },
    { id: 29, title: "Web Development" },
    { id: 30, title: "Back-end Development" },
    { id: 31, title: "Internet" },
    { id: 32, title: "Application Security Administration" },
]);

  
  
    return (
      <div className="post_joblist1">
        <h1 className="post_heading">Information Technology</h1>
        {jobs.map((job) => (
          <div key={job.id}>
            <div className="job_categoryList">
              <Checkbox
                {...label}
                sx={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              <h3 className="post_title">{job.title}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

export default JobList2;
