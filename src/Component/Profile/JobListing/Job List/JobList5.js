import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList5() {
  const [jobs] = useState([
    { id: 1, title: "Accounting Degrees" },
    { id: 2, title: "Academic Support Services" },
    { id: 3, title: "Admissions Officer" },
    { id: 4, title: "Aerospace Engineering" },
    { id: 5, title: "Agricultural Technology" },
    { id: 6, title: "Airlines & Aviation" },
    { id: 7, title: "Architecture" },
    { id: 8, title: "Aviation & Aerospace" },
    { id: 9, title: "Biomedical Engineering" },
    { id: 10, title: "Biotechnology" },
    { id: 11, title: "Branding" },
    { id: 12, title: "Business Analytics" },
    { id: 13, title: "Business Management" },
    { id: 14, title: "Chemical Engineering" },
    { id: 15, title: "Chemistry" },
    { id: 16, title: "Civil Engineering" },
    { id: 17, title: "Colleges Education" },
    { id: 18, title: "Computer & IT Engineering & Tech" },
    { id: 19, title: "Curriculum Developer" },
    { id: 20, title: "Curriculum Development" },
    { id: 21, title: "Defence & Space" },
    { id: 22, title: "Doctor" },
    { id: 23, title: "E-Learning" },
    { id: 24, title: "Education" },
    { id: 25, title: "Education Administrator" },
    { id: 26, title: "Education Management" },
    { id: 27, title: "Engineer" },
    { id: 28, title: "Fashion Design & Technology" },
    { id: 29, title: "Food Technology" },
    { id: 30, title: "Geoscience" },
    { id: 31, title: "Hospitals / Clinics / Nursing Home" },
    { id: 32, title: "Hospitality" },
    { id: 33, title: "Institutes" },
    { id: 34, title: "Lawyer" },
    { id: 35, title: "Library" },
    { id: 36, title: "Marine" },
    { id: 37, title: "Maths" },
    { id: 38, title: "Mechanical Engineering" },
    { id: 39, title: "Medical / Healthcare" },
    { id: 40, title: "Merchandising, Retail" },
    { id: 41, title: "Nanotechnology" },
    { id: 42, title: "Patent Attorneys" },
    { id: 43, title: "Pharmaceuticals" },
    { id: 44, title: "Physics" },
    { id: 45, title: "Psychology" },
    { id: 46, title: "Recruitment" },
    { id: 47, title: "Research and Development" },
    { id: 48, title: "Rehabilitation Counselling" },
    { id: 49, title: "Risk Management" },
    { id: 50, title: "Sales and Support" },
    { id: 51, title: "Science & Technology" },
    { id: 52, title: "School Education" },
    { id: 53, title: "Social Media Management" },
    { id: 54, title: "Social Media Marketing (SMM)" },
    { id: 55, title: "Structural Engineering" },
    { id: 56, title: "Supply Chain Management" },
    { id: 57, title: "Training" },
    { id: 58, title: "Travel & Tourism" },
    { id: 59, title: "Veterinary" },
    { id: 60, title: "Voice Search Optimization" },
]);

  
  
  
    return (
      <div className="post_joblist1">
        <h1 className="post_heading">Professional & Education Services</h1>
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

export default JobList5;
