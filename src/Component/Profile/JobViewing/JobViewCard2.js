import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Post1 from "../../../assets/images/post1.png";
import Post2 from "../../../assets/images/post2.png";
import Post3 from "../../../assets/images/post3.png";
import Post4 from "../../../assets/images/post4.png";
import { data } from "../../../Data/ViewJsonData";
import "../JobListing/jobListing.css";
import "../JobViewing/Jobviewing.css";

const JobViewCard2 = ({
  data,
  image,
  Roll,
  companyname,
  rating,
  reviews,
  location,
  time,
  Experience,
  skill,
  package1,
}) => (
  <div className="card1View">
    <div className="job-listing">
      <div className="job-card-container">
        {data.map((job, index) => (
          <div className="card1ViewContainer" key={index}>
            <h2>{job.Roll}</h2>
            <div className="job-header">
              <p className="companyname">{job.companyname}</p>
              <p className="rating">
                <StarIcon className="star-icon" />
                {job.rating}
              </p>
              <p className="reviews">{job.reviews}</p>
            </div>
            <div className="job-metadata">
              <div className="metadata-item">
                <img src={Post1} alt={job.Roll} />
                <p>{job.location}</p>
                <div className="time-container">
                  <p>{job.time}</p>
                </div>
              </div>
              <div className="metadata-item">
                <img src={Post2} alt={job.Roll} />
                <p>{job.Experience}</p>
                <img src={Post3} alt={job.Roll} />
                <p>{job.package1}</p>
              </div>
              <img src={job.image} alt={job.Roll} className="job-image" />
              <div className="skills-container">
                <img src={Post4} alt={job.Roll} />
                <div>
                  {Object.values(job.skill).map((skill, idx) => (
                    <div className="skill" key={idx}>
                      <p>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="divider"></div>
              <div className="post-info">
                <AccessTimeIcon className="post_icon" />
                <p>Posted on 20 Dec, 2023</p>
                <p className="save">
                  <TurnedInNotIcon className="post_saveIcon" />
                  Save
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default JobViewCard2;
