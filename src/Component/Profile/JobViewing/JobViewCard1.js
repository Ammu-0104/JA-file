import React from "react";
import T4 from "../../../assets/images/viewCall.svg";
import T5 from "../../../assets/images/viewEmail.svg";
import "../../../Component/Profile/JobListing/jobListing.css";
import "../JobViewing/Jobviewing.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Right1 from "../../../assets/images/right1.png";
import Right2 from "../../../assets/images/right2.png";
import Edit from "../../../assets/images/edit.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ScuccessIcon from "../../../assets/images/postSuccess.svg";
import PropTypes from "prop-types";

const JobListingCard = ({ data = [] }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <div className="Main-job-card-container">
      {data.map((job, index) => (
        <div key={index}>
          <div className="viewJobContainer view_JobContainer">
            <div className="main_cont">
              <div className="main_sub">
                <div className="main_sub1">
                  <img className="job_vsimg" src={job.image} alt="" />
                </div>

                <div>
                  <p className="job_para">{job.Roll}</p>
                  <div className="main_subpart">
                    <p className="job_abc">{job.companyname}</p>
                    <div className="job_subpart1">
                      <img src={job.icon8} alt="" />
                      <span className="job_star">{job.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view_apysvBtn">
                <button className="clickbar4" onClick={handleOpen}>
                  Apply Now
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                >
                  <Box className="confirm-job">
                    <div className="post_cfmClose">
                      <CloseIcon
                        className="post_cfmIcon"
                        onClick={handleClose}
                      />
                    </div>
                    <div className="cfm_contMain">
                      <div className="post_subCont">
                        <div>
                          <img
                            className="post_tickIcon"
                            src={ScuccessIcon}
                            alt="close icon"
                          />
                        </div>
                        <div>
                          <Typography
                            className="cfm_para"
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Application Sent successfully !
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            className="cfm_paraLive"
                            id="modal-modal-description"
                          >
                            Explore more jobs that match your profile{" "}
                          </Typography>
                        </div>
                      </div>

                      <div className="post_cfmBtn">
                        <Link to="/main/jobListing">
                          <Button className="post_editBtn" variant="contained">
                            See More jobs
                          </Button>
                        </Link>
                        <Link to="/main/MyActivity">
                          <Button
                            className="post_editBtn post_jobsBtn"
                            variant="outlined"
                          >
                            My Activity
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </Modal>
                <Link to="/main/SimilarJobs">
                  <button className="view_saveBtn">Save Job</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="highLightsContainer highViewContainer">
            <div className="view_listHead">Highlights</div>
            <a href="#jobdescription" className="main_viewBtn">
              <div className="view_listHead">Job Description</div>
            </a>
            <a href="#jobparticulars" className="main_viewBtn">
              <div className="view_listHead">Job Particulars</div>
            </a>
            <a href="#recruiterinformation" className="main_viewBtn">
              <div className="view_listHead">Recruiter Information</div>
            </a>
          </div>

          <div className="highLightsContainer1 high_LightsContainer1">
            <div className="main_cont">
              <div className="main_sub">
                <div className="main_subpart1">
                  <div className="job_submain">
                    <img className="job_location" src={job.iconv1} alt="" />
                    <span className="job_chn">{job.location}</span>
                  </div>
                  <p className="job_time">{job.time}</p>
                </div>
              </div>
            </div>
            <div className="main_subpart1 main_subpart11">
              <div className="job_submain">
                <img className="job_location" src={job.iconv2} alt="" />
                <span className="job_chn">{job.Experience}</span>
              </div>
              <div className="job_submain">
                <img className="job_location" src={job.iconv3} alt="" />
                <span className="job_chn">{job.package}</span>
              </div>
            </div>
            <div className="main_subpart1 job_subskill">
              <div className="job_submain job_submain11">
                <img className="job_location job_hum" src={job.iconv4} alt="" />
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
                  src={job.iconv5}
                  alt=""
                />
                <span className="job_chn job_days">{job.posted}</span>
              </div>
              <div className="job_submain">
                <img
                  className="job_location job_timeicon"
                  src={job.iconv6}
                  alt=""
                />
                <span className="job_chn job_save">{job.save}</span>
              </div>
              <div className="job_submain">
                <img
                  className="job_location job_timeicon"
                  src={job.iconv7}
                  alt=""
                />
                <span className="job_chn job_days">{job.apply}</span>
              </div>
            </div>
          </div>

          <div className="viewContentCont">
            <h3 id="jobdescription" className="view_jobApply">
              Job Description
            </h3>
            <p className="view_paraContent">
              We are seeking a skilled and motivated Software Developer to join
              our team full-time and work remotely. As a Software Developer, you
              will be an integral part of our agile development process,
              contributing to the design, implementation, testing, and
              maintenance of cutting-edge software solutions. Your role will
              involve collaborating with cross-functional teams to translate
              business requirements into functional code and driving the
              continuous improvement of our software products.
            </p>

            <div>
              <h3 className="view_headingRes">Key responsibilities</h3>
              <ul className="view_ulList">
                <li className="view_keyList">
                  Design and develop WordPress websites using themes such as
                  Elementor, Gutenberg, and WPBakery. or using Child theme.
                </li>
                <li className="view_keyList">
                  Customize and modify WordPress themes and templates to align
                  with brand identity and aesthetic preferences.
                </li>
                <li className="view_keyList">
                  Create responsive web designs for optimal viewing across
                  various devices and screens.
                </li>
                <li className="view_keyList">
                  Ensure website performance and optimization for speed and SEO.
                </li>
                <li className="view_keyList">
                  Troubleshoot and resolve any technical issues related to
                  WordPress websites remotely.
                </li>
                <li className="view_keyList view_keyPad">
                  Stay updated with the latest web design trends, WordPress
                  updates, and emerging technologies to continuously improve
                  your skills and the quality of our work.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="view_headingRes">Qualifications</h3>
              <ul className="view_ulList view_ulList0">
                <li className="view_keyList">
                  Proven experience as a WordPress Web Developer/Designer, with
                  a strong portfolio showcasing your previous work.
                </li>
                <li className="view_keyList">
                  Proficiency in WordPress CMS and popular page builders like
                  Elementor, WP Bakery, and Gutenberg.
                </li>
                <li className="view_keyList">
                  Basic knowledge of HTML, CSS, PHP, and JavaScript.
                </li>
                <li className="view_keyList">
                  Knowledge of theme and Plugin development.
                </li>
                <li className="view_keyList">
                  Strong understanding of web design principles, responsive
                  design, and SEO best practices.
                </li>
                <li className="view_keyList">
                  Excellent visual design skills and a keen eye for detail
                </li>
                <li className="view_keyList">
                  Effective communication skills for virtual meetings and
                  collaboration.
                </li>
                <li className="view_keyList">
                  Highly organized, self-motivated, and able to meet project
                  deadlines.
                </li>
              </ul>
            </div>

            <div className="view_Width">
              <h3 id="jobparticulars" className="view_jobApply">
                Job Particulars
              </h3>

              <div className="view_partList view_partType">
                <p className="view_partContent view_partHeading">Job Type </p>
                <p className="view_partContent">
                  Full Time - Permanent, Work from Office
                </p>
              </div>

              <div className="view_partList view_partIndustry">
                <p className="view_partContent view_partHeading">Industry </p>
                <p className="view_partContent">IT Services and consulting</p>
              </div>

              <div className="view_partList view_partDept">
                <p className="view_partContent view_partHeading">Department </p>
                <p className="view_partContent">
                  IT Software Development - System Programming
                </p>
              </div>

              <div className="view_partList view_partRole">
                <p className="view_partContent view_partHeading">Role </p>
                <p className="view_partContent">Software Developer</p>
              </div>

              <div className="view_partList view_partEdu">
                <p className="view_partContent view_partHeading">Education </p>
                <p className="view_partContent">UG - Any graduate</p>
              </div>
            </div>
            <div className="view_partList view_partSkills">
              <p className="view_partContent view_partHeading pb-3">
                Key Skills
              </p>

              <div className="view_partContainer">
                {Object.values(job.skills).map((skills, idx) => (
                  <div>
                    {" "}
                    <p className="view_partSContent" key={idx}>
                      {skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h3 id="recruiterinformation" className="view_jobApply">
              Recruiter Information
            </h3>
            <p className="view_reqDept">Department </p>

            <p className="view_paraContent">
              ABC Solutions is truly your Home to a billion possibilities. We
              believe in opportunities for everyone - to be bold, curious and
              seek to shape the future. Explore what is possible, discover what
              you love to do and find accelerated paths for growth. With a
              vision of self-reliance and technology leadership, UNO MINDA
              launched CREAT (Centre of Research, Engineering and Advance
              Technologies).{" "}
            </p>
            <p className="view_reqDept view_req0">Company Address </p>

            <p className="view_partContent view_reqAddress">
              No-10 LB Road, Adyar, Chennai India
            </p>

            <p className="view_reqDept view_req0">Company Website </p>

            <p className="view_reqWebsite">
              https://www.abcsolutions.com/techno/creative
            </p>

            <p className="view_reqDept view_req0">Contact Person </p>

            <p className="view_reqhr">
              Priya L{" "}
              <span className="view_reqhr view_reqMan">(HR Manager)</span>
            </p>

            <div className="view_reqMain">
              <div className="view_reqCont">
                <img src={T4} alt="phone no" className="view_icons" />
                <p className="view_reqContact">+91 0123456789 </p>
              </div>

              <div className="view_reqCont">
                <img src={T5} alt="email" className="view_icons" />
                <p className="view_reqContact view_reqEmail">priya@abc.com </p>
              </div>
            </div>

            <div className="view_apysvBtn">
              <button className="clickbar4" onClick={handleOpen1}>
                Apply Now
              </button>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="confirm-job confirm-job0">
                  <div className="post_cfmClose">
                    <CloseIcon
                      className="post_cfmIcon"
                      onClick={handleClose1}
                    />
                  </div>
                  <div className="cfm_contMain">
                    <Typography
                      className="view_modelHeading"
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Complete your profile
                    </Typography>

                    <Typography
                      id="modal-modal-description"
                      className="view_modelPara"
                    >
                      By completing all the details you have a higher chance of
                      being seen by recruiters.{" "}
                    </Typography>

                    <div className="view_mdlPertCont">
                      <h2 className="view_modelPercentage">40%</h2>
                      <progress max="100" value="40"></progress>
                    </div>

                    <div className="view_modelCont">
                      <div className="view_modelSub">
                        <div className="view_modelInner">
                          <img
                            src={Right1}
                            alt={job.Roll}
                            className="view_modelIcon"
                          />

                          <p className="view_modelSubHead">
                            Upload your resume
                          </p>
                        </div>

                        <img
                          src={Right2}
                          alt={job.Roll}
                          className="view_modelIcon"
                        />
                      </div>

                      <div className="view_modelSub">
                        <div className="view_modelInner">
                          <img
                            src={Right1}
                            alt={job.Roll}
                            className="view_modelIcon"
                          />

                          <p className="view_modelSubHead">Add Education</p>
                        </div>

                        <img
                          src={Right2}
                          alt={job.Roll}
                          className="view_modelIcon"
                        />
                      </div>

                      <div className="view_modelSub">
                        <div className="view_modelInner">
                          <img
                            src={Right1}
                            alt={job.Roll}
                            className="view_modelIcon"
                          />

                          <p className="view_modelSubHead">Add Experience</p>
                        </div>

                        <img
                          src={Right2}
                          alt={job.Roll}
                          className="view_modelIcon"
                        />
                      </div>

                      <div className="view_editCont">
                        <Link to="/main/jobPosting">
                          <p className="view_editHead">Edit Profile</p>
                        </Link>
                        <img
                          src={Edit}
                          alt={job.Roll}
                          className="view_modelIcon"
                        />
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
              <Link to="/main/SimilarJobs">
                <button className="view_saveBtn">Save Job</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

JobListingCard.propTypes = {
  data: PropTypes.array,
};

export default JobListingCard;
