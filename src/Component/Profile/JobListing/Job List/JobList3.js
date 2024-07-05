import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function JobList3() {
  const [jobs] = useState([
    { id: 1, title: "Accounting" },
    { id: 2, title: "Actuary" },
    { id: 3, title: "Assets" },
    { id: 4, title: "Auto Finance" },
    { id: 5, title: "Banking & Insurance" },
    { id: 6, title: "Bookkeeping / Auditing Clerk" },
    { id: 7, title: "BFSI - Investments, Trading & Other" },
    { id: 8, title: "Budgeting" },
    { id: 9, title: "Capital" },
    { id: 10, title: "Capital Markets" },
    { id: 11, title: "Chartered Accountancy / CIMA" },
    { id: 12, title: "Chit Funds" },
    { id: 13, title: "Claims" },
    { id: 14, title: "Compliance" },
    { id: 15, title: "Credit and Collections" },
    { id: 16, title: "Financial Consulting" },
    { id: 17, title: "Financial Planning and Analysis (FP&A)" },
    { id: 18, title: "Financial Systems and Technology" },
    { id: 19, title: "Fundraising" },
    { id: 20, title: "Fintech" },
    { id: 21, title: "Insurance" },
    { id: 22, title: "IT Network" },
    { id: 23, title: "Legal & Compliance" },
    { id: 24, title: "Loan" },
    { id: 25, title: "Money Lender" },
    { id: 26, title: "Payroll" },
    { id: 27, title: "Property" },
    { id: 28, title: "Reconciliation" },
    { id: 29, title: "Revenue" },
    { id: 30, title: "Retail Chain/FMCG" },
    { id: 31, title: "SAP / ERP" },
    { id: 32, title: "Statistics" },
    { id: 33, title: "Stocks & Shares" },
    { id: 34, title: "Tax" },
    { id: 35, title: "Trading, Asset and Wealth" },
    { id: 36, title: "Treasury and Risk Management" },
]);


  
    return (
      <div className="post_joblist1">
        <h1 className="post_heading">Banking & Finance </h1>
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

export default JobList3;
