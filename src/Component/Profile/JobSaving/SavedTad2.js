import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { PieChart as MUIPieChart } from "@mui/x-charts";
import "../../Profile/JobListing/jobListing.css";
import cardsData from "../../../Data/CardsDataJson";
import Data from "../../../Data/DataJson";
import SavePie1 from "../../../assets/Icons/savePie1.svg";
import SavePie2 from "../../../assets/Icons/savePie2.svg";
import SavePie3 from "../../../assets/Icons/savePie3.svg";
import SavePie4 from "../../../assets/Icons/savePie4.svg";

const data2 = [
  {
    label: "No response",
    value: 350,
    color: "#73C2FB",
    className: "shortlisted-label",
    circle: true,
  },
  {
    label: "Selected",
    value: 1300,
    color: "#4B9CD3",
    className: "shortlisted-label",
    circle: true,
  },
  {
    label: "Rejected",
    value: 280,
    color: "#B0C4DE",
    className: "shortlisted-label",
    circle: true,
  },
  {
    label: "Shortlisted",
    value: 1300,
    color: "#B9D9EB",
    className: "shortlisted-label",
    circle: true,
  },
];

const SavedTab2 = () => {
  // const [open, setOpen] = useState(false);
  // const [jobType, setJobType] = useState("");
  const [cards, setCards] = useState([]);
  const [jobs, setJobs] = useState([]);
  // const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setCards(cardsData);
    setJobs(Data);
  }, []);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleCloseSort = () => {
  //   setAnchorEl(null);
  // };

  const renderLegend = () => (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {data2.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: entry.color,
              borderRadius: "50%",
              marginRight: "8px",
            }}
          ></div>
          <Typography variant="body2">{entry.label}</Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="savedPieChart">
      <div className="pieChartCont">
        <MUIPieChart
          series={[
            {
              data: data2,
              cx: 200,
              cy: 150,
              innerRadius: 85,
              outerRadius: 120,
            },
          ]}
          height={300}
          slotProps={{
            legend: { content: renderLegend, hidden: false },
          }}
        />
        <div className="save_pieTxt">
          <p className="save_two">20</p>
          <p className="save_pieJob">Job Applied</p>
        </div>

        <div className="pieChartImage top-left">
          <img src={SavePie1} className="top_lft" alt="Top Left" />
          <span className="save_short">Shortlisted</span>
        </div>
        <div className="pieChartImage top-right">
          <img src={SavePie2} className="top_rgt" alt="Top Right" />
          <span className="save_no">NO Response</span>
        </div>
        <div className="pieChartImage bottom-left">
          <img src={SavePie3} className="bottom_lft" alt="Bottom Left" />
          <span className="save_reject">Rejected</span>
        </div>
        <div className="pieChartImage bottom-right">
          <img src={SavePie4} className="bottom_rgt" alt="Bottom Right" />
          <span className="save_select">Selected</span>
        </div>
      </div>
      <div className="filterContainer2">
        <div className="filter_sort">
          <h3 className="filterContainertext">Job Applied</h3>
        </div>
        <div>
          {Data.map((job, index) => (
            <div key={index} className="job-listing">
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
                      <div className="save_stsCont">
                        <span className="save_statusSave">Status : </span>
                        <span className={`status ${job.stsclass}`}>
                          {job.sts}
                        </span>
                      </div>
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
                        src={job.icon12}
                        alt=""
                      />
                      <span className="job_chn job_save">{job.applied}</span>
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

export default SavedTab2;
