import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList4() {
  const [jobs] = useState([
    { id: 1, title: "Advertising" },
    { id: 2, title: "Affiliate Marketing" },
    { id: 3, title: "Administration & Staff" },
    { id: 4, title: "Augmented Reality (AR) and Virtual Reality (VR)" },
    { id: 5, title: "Branding" },
    { id: 6, title: "Business Analytics" },
    { id: 7, title: "Business Management" },
    { id: 8, title: "Customer Relationship Management (CRM)" },
    { id: 9, title: "Customer Support" },
    { id: 10, title: "Data Analytics" },
    { id: 11, title: "Digital Marketing" },
    { id: 12, title: "Distribution" },
    { id: 13, title: "Content Marketing" },
    { id: 14, title: "Email Marketing" },
    { id: 15, title: "eCommerce" },
    { id: 16, title: "Inventory Management" },
    { id: 17, title: "Human Resources" },
    { id: 18, title: "Risk Management & Compliance" },
    { id: 19, title: "Conversion Rate Optimization (CRO)" },
    { id: 20, title: "Marketing" },
    { id: 21, title: "Market Research" },
    { id: 22, title: "Merchandising, Retail" },
    { id: 23, title: "Operations" },
    { id: 24, title: "Pay-Per-Click (PPC)" },
    { id: 25, title: "Procurement & Purchase" },
    { id: 26, title: "Project Planning" },
    { id: 27, title: "Recruitment" },
    { id: 28, title: "Search Engine Optimization (SEO)" },
    { id: 29, title: "Search Engine Marketing (SEM)" },
    { id: 30, title: "Social Media Management" },
    { id: 31, title: "Social Media Marketing (SMM)" },
    { id: 32, title: "Strategic Management" },
    { id: 33, title: "Sales Support" },
    { id: 34, title: "Supply Chain Management" },
    { id: 35, title: "Voice Search Optimization" },
    { id: 36, title: "Online Public Relations (PR)" },
    { id: 37, title: "Retail Analytics" },
    { id: 38, title: "Sales and Support" },
    { id: 39, title: "Risk Management" },
]);



  
    return (
      <div className="post_joblist1">
        <h1 className="post_heading">HR, Marketing & Business</h1>
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

export default JobList4;
