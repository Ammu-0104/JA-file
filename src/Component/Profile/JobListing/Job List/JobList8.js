import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList8() {
  
  const [jobs] = useState([
    { id: 1, title: "Apparel & Fashion" },
    { id: 2, title: "Arms Dealer" },
    { id: 3, title: "Assemblers and Fabricators" },
    { id: 4, title: "Automobiles & Auto Parts" },
    { id: 5, title: "Business Supplies & Equipment" },
    { id: 6, title: "Electrical & Electronic Manufacturing" },
    { id: 7, title: "Energy" },
    { id: 8, title: "Forex Dealers & Bullion" },
    { id: 9, title: "Furniture / Timber" },
    { id: 10, title: "Import / Export" },
    { id: 11, title: "Logistics & Transportation" },
    { id: 12, title: "Manufacturing" },
    { id: 13, title: "Manufacturing and Production" },
    { id: 14, title: "Marbles & Granite" },
    { id: 15, title: "Mining" },
    { id: 16, title: "Oil and Gas" },
    { id: 17, title: "Petrol" },
    { id: 18, title: "Power / Electricity" },
    { id: 19, title: "Printing / Publishing" },
    { id: 20, title: "Recycling Operatives" },
    { id: 21, title: "Shipbuilding" },
    { id: 22, title: "Steel / Hardware" },
    { id: 23, title: "Textile & Garments" },
    { id: 24, title: "Warehousing" },
]);

  

    return (
      <div className="post_joblist1">
        <h1 className="post_heading">Heavy Industries</h1>
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

export default JobList8;
