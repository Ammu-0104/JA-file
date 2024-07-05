import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList1() {
  const [jobs] = useState([
    { id: 1, title: "Advsior / Consultant" },
    { id: 2, title: "Chief Compliance officer (CCO)" },
    { id: 3, title: "Chief Engineer" },
    { id: 4, title: "Chief Executive officer (CEO)" },
    { id: 5, title: "Chief Financial officer (CFO)" },
    { id: 6, title: "Chief Human Resources Officer (CHRO)" },
    { id: 7, title: "Chief Information Security Officer (CISO)" },
    { id: 8, title: "Chief Marketing officer (CMO)" },
    { id: 9, title: "Chief Operations officer (COO)" },
    { id: 10, title: "Chief People Officer (CPO)" },
    { id: 11, title: "Chief Revenue Officer (CRO)" },
    { id: 12, title: "Chief Sustainability Officer (CSO)" },
    { id: 13, title: "Country/Region Officer" },
    { id: 14, title: "Co-Founder" },
    { id: 15, title: "Director" },
    { id: 16, title: "Economist" },
    { id: 17, title: "Expert / Lead" },
    { id: 18, title: "General Manager" },
    { id: 19, title: "Head Human Resource" },
    { id: 20, title: "Head Operations" },
    { id: 21, title: "IT Head" },
    { id: 22, title: "Managing Director" },
    { id: 23, title: "President" },
    { id: 24, title: "Principal/Lecturer / Expertise" },
    { id: 25, title: "Product Analyst/Designer/Owner" },
    { id: 26, title: "Project Leader" },
    { id: 27, title: "Public Relations Officer (PRO)" },
    { id: 28, title: "Research Analyst/ R&D" },
    { id: 29, title: "Risk Advisory/Management" },
    { id: 30, title: "Social media / Community Manager" },
    { id: 31, title: "Vice President" },
    { id: 32, title: "Chief Supply Chain Officer" },
]);

  

  return (
    <div className="post_joblist1">
      <h1 className="post_heading">Top Management Levels</h1>
      {jobs.map((job) => (
        <div key={job.id}>
        <Link to="">
        </Link>
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

export default JobList1;
