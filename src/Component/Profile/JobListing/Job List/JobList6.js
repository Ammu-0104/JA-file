import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList6() {
  const [jobs] = useState([
    { id: 1, title: "Abacus" },
    { id: 2, title: "Abacus" },
    { id: 3, title: "Acting" },
    { id: 4, title: "Animation" },
    { id: 5, title: "Art Direction" },
    { id: 6, title: "Culinary" },
    { id: 7, title: "Crafts" },
    { id: 8, title: "Dance" },
    { id: 9, title: "Design Arts" },
    { id: 10, title: "Entertainment" },
    { id: 11, title: "Fashion" },
    { id: 12, title: "Filmmaking" },
    { id: 13, title: "Literary" },
    { id: 14, title: "Music" },
    { id: 15, title: "Multi-disciplinary" },
    { id: 16, title: "Photography" },
    { id: 17, title: "Photography" },
    { id: 18, title: "Sports" },
    { id: 19, title: "Swimming/Surfing" },
    { id: 20, title: "Writer/Author" },
    { id: 21, title: "Yoga" },
]);
  
    return (
      <div className="post_joblist1">
        <h1 className="post_heading">Creative arts & Well being</h1>
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

export default JobList6;
