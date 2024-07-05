import React, { useEffect, useState } from "react";
import cardsData from "../../../Data/CardsDataJson";
import Data from "../../../Data/DataJson";
import "../../Profile/JobListing/jobListing.css";
import Checkbox from "@mui/material/Checkbox";
import { Popover } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import JobListingCard from "../JobListing/Job List/JobListingCard";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  width: 996,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 708,
  p: 4,
};
const SavedTab1 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [selectedJob, setSelectedJob] = useState("");
  const [jobType, setJobType] = React.useState("");
  const [cards, setCards] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSort = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setCards(cardsData);
    setJobs(Data);
  }, []);

  return (
    <div>
      <div className="filterContainer2 savedContainer">
        <div className="filter_sort">
          <h3 className="filterContainertext">Saved Jobs</h3>

        </div>
        <div>
          {Data.map((job, index) => (
            // <JobListingCard />
            <div key={index} job={job} className="job-listing">
              <Link className="jobList_link" to="/main/jobViewing">
                <div className="cardmain">
                  <div className="main_cont">
                    <div className="main_sub">
                      <p className="job_para">{job.Roll}</p>

                      <div className="main_subpart">
                        <p className="job_abc">{job.companyname}</p>
                        <div className="job_subpart1">
                          <img src={job.icon8} alt="" />
                          <span className="job_star">{job.rating}</span>
                          <span className="job_review">{job.reviews}</span>
                        </div>
                      </div>
                      <div className="main_subpart1">
                        <div className="job_submain">
                          <img className="job_location" src={job.icon} alt="" />
                          <span className="job_chn">{job.location}</span>
                        </div>
                        <p className="job_time">{job.time}</p>
                      </div>
                    </div>
                    <div className="main_sub1">
                      <img className="job_vsimg" src={job.image} alt="" />
                    </div>
                  </div>
                  <div className="main_subpart1 main_subpart11">
                    <div className="job_submain">
                      <img className="job_location" src={job.icon1} alt="" />
                      <span className="job_chn">{job.Experience}</span>
                    </div>
                    <div className="job_submain">
                      <img className="job_location" src={job.icon3} alt="" />
                      <span className="job_chn">{job.package}</span>
                    </div>
                  </div>
                  <div className="main_subpart1 job_subskill">
                    <div className="job_submain job_submain11">
                      <img
                        className="job_location job_hum"
                        src={job.icon4}
                        alt=""
                      />
                      {Object.values(job.skill).map((skill, idx) => (
                        <p className="job_skill" key={idx}>
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="main_subpart1 main_subpart11 main_subpost">
                    <div className="job_submain">
                      <img
                        className="job_location job_timeicon"
                        src={job.icon11}
                        alt=""
                      />
                      <span className="job_chn job_save">{job.saved}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedTab1;
