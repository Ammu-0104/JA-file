import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList7() {
  const [jobs] = useState([
    { id: 1, title: "Agriculture / Allied Industries" },
    { id: 2, title: "Allied Healthcare & Clinical" },
    { id: 3, title: "Alternative Dispute Resolution" },
    { id: 4, title: "Business" },
    { id: 5, title: "Consultancy" },
    { id: 6, title: "Construction / Real Estate" },
    { id: 7, title: "Cosmetics" },
    { id: 8, title: "Crime/Arbitration" },
    { id: 9, title: "Doctor" },
    { id: 10, title: "Fertilizers / Chemical" },
    { id: 11, title: "Fisheries/Poultry" },
    { id: 12, title: "Food Production" },
    { id: 13, title: "Gambling & Casinos" },
    { id: 14, title: "Gems / Jewellery" },
    { id: 15, title: "Government Bodies" },
    { id: 16, title: "Government Relations" },
    { id: 17, title: "Health and Wellness" },
    { id: 18, title: "Hotels / Restaurants" },
    { id: 19, title: "International Affairs" },
    { id: 20, title: "International Trade and Development" },
    { id: 21, title: "Journalism" },
    { id: 22, title: "Judiciary / Law Practices & Services" },
    { id: 23, title: "Legislative Office" },
    { id: 24, title: "Maintenance" },
    { id: 25, title: "Manufacturing and Production" },
    { id: 26, title: "Media/Press" },
    { id: 27, title: "Military" },
    { id: 28, title: "NGO & Social Organizations" },
    { id: 29, title: "Nonprofit Organization Management" },
    { id: 30, title: "Operator" },
    { id: 31, title: "Paper & Forest Products" },
    { id: 32, title: "Philanthropy" },
    { id: 33, title: "Physician" },
    { id: 34, title: "Public Relations & Communications" },
    { id: 35, title: "Public Safety, Corrections & Security" },
    { id: 36, title: "Ranching" },
    { id: 37, title: "Recreational Facilities and Services" },
    { id: 38, title: "Religious Institutions" },
    { id: 39, title: "Surgeon" },
    { id: 40, title: "Telecommunication" },
    { id: 41, title: "Veterinary" },
    { id: 42, title: "Yoga" },
  ]);

  
  
  
    return (
      <div className="post_joblist1">
        <h1 className="post_heading">Other Categories</h1>
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

export default JobList7;
