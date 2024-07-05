import React from "react";
import { Link } from "react-router-dom";

const JobListingCard = ({ job }) => {
    return (
      <div className="job-listing">
        <Link className="jobList_link" to="/main/jobViewing">
          <div className="cardmain">
            <div className="main_cont">
              <div className="main_sub">
                <p className="job_para">{job.Roll}</p>
  
                <div className="main_subpart">
                  <p className="job_abc">{job.companyname}</p>
                  <div className="job_subpart1">
                    <img src={job.icon8} className="job_starIcon" alt="" />
                    <span className="job_star">{job.rating}</span>
                    <span className="job_review">{job.reviews}</span>
                  </div>
                </div>
                <div className="main_subpart1">
                  <div className="job_submain jl_location">
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
                <img className="job_location job_hum" src={job.icon4} alt="" />
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
                  src={job.icon9}
                  alt=""
                />
                <span className="job_chn job_save">{job.posted}</span>
              </div>
            
              <div className="job_submain">
                <img
                  className="job_location job_timeicon"
                  src={job.icon10}
                  alt=""
                />
                <span className="job_chn job_save">{job.save}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  
  export default JobListingCard