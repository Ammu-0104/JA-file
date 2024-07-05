import React, { useEffect, useState } from "react";
import cardsData from "../../../Data/CardsDataJson";
import Data from "../../../Data/DataJson";
import "../../Profile/JobListing/jobListing.css";
import { Link } from "react-router-dom";
import PostEditIcon from '../../../assets/Icons/postEditIcon.svg'

const JobPostedS = () => {
  const [cards, setCards] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setCards(cardsData);
    setJobs(Data);
  }, []);

  return (
    <div className="jobPostedScr">
      <div className="filterContainer2">
        <div className="filter_sort">
          <h3 className="filterContainertext">Job Posting Activity</h3>

          <div className="post_btnCont">
            <div className="post_btnGap">
            <div>
              <button className="post_btnJob">
                <span className="post_act">2</span>
                <span>Active Jobs</span>
              </button>
            </div>
            <div>
              <button className="post_btnJob">
                <span className="post_hold">5</span>
                <span>On Hold Jobs</span>
              </button>
            </div>
            <div>
              <button className="post_btnJob">
                <span className="post_reject">5</span>
                <span>Rejected Jobs</span>
              </button>
            </div>
            <div>
              <button className="post_btnJob">
                <span className="post_expire">5</span>
                <span>Expired Jobs</span>
              </button>
            </div>

            </div>
            <div>
                <p className="post_week">Over  Last 1 Week</p>
            </div>
           
          </div>
        </div>

        <div className="post_containerContent">
            <div className="post_subContainer">
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

                      <img className="post_3dot" src={job.icon13} alt="" />
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
                        src={job.icon9}
                        alt=""
                      />
                      <span className="job_chn job_save">{job.posted}</span>
                    </div>
        
                     <span className="post_hour">{job.hour}</span>
        
                  </div>
                </div>
              </Link>
            </div>
             ))}

            </div>
         

          <div>
            <button className="edit_btn">
                <img src={PostEditIcon} alt="" />
                <span className="post_edit">Edit Post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostedS;
