import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import PostViewTab1 from "./PostViewTab1";
import PostViewTab2 from "./PostViewTab2";
import PostViewJson from "../../../Data/PostViewJson";
import "../MyViewedPosting/PostView.css";
import "../MyActivityViewed/MyView.css";
import Button from "@mui/material/Button";
import ScuccessIcon from "../../../assets/images/postSuccess.svg";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

// Main component
export default function PostView() {
  const todayData = PostViewJson.slice(0, 1);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(item);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="activeCont viewCont postViewCont">
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <div className=" pb-5">
            {todayData.map((item, index) => (
              <div key={index}>
                <Card className={`viewParent ${item.colorClass} p-4`}>
                  <div className="postView">
                    <div className="postView1">
                      <img className="act_close" src={item.image1} alt="" />
                      <Typography className="postCandidate" variant="body2">
                        {item.candidatename}
                      </Typography>
                      <p className={`act_imgContent ${item.bgColor}`}>
                        {item.percentage}{" "}
                      </p>
                    </div>
                    <div className="postView2">
                      <h1 className="PostWork">Work Info</h1>
                      <div>
                        <div className="postCont">
                          <img src={item.image2} alt="" />
                          <p className="postHeading">{item.companyname}</p>
                        </div>
                        <div className="postCont">
                          <img src={item.image3} alt="" />
                          <p className="postHeading">{item.location}</p>
                        </div>
                        <div className="postCont">
                          <img src={item.image4} alt="" />
                          <p className="postHeading">{item.experience}</p>
                        </div>
                        <div className="postCont">
                          <img src={item.image5} alt="" />
                          <p className="postHeading">{item.salary}</p>
                        </div>
                      </div>
                    </div>
                    <div className="postView3">
                      <h1 className="PostWork">Contact Info</h1>
                      <div>
                        <div className="postCont">
                          <img src={item.image6} alt="" />
                          <p className="postHeading">{item.emailid}</p>
                        </div>
                        <div className="postCont">
                          <img src={item.image7} alt="" />
                          <p className="postHeading">{item.phoneno}</p>
                        </div>
                        <div className="postCont">
                          <img src={item.image3} alt="" />
                          <p className="postHeading post_headingView">{item.address}</p>
                        </div>
                        <div className="postCont">
                          <img src={item.image8} alt="" />
                          <p className="postHeading postLink">{item.link}</p>
                        </div>
                      </div>
                    </div>
                    <div className="postView4">
                      <div className="postResume">
                        <span className="postDown" onClick={handleOpen}>
                          Download Resume
                        </span>
                        <img src={item.image9} alt="" />

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
                                   Resume downloaded successfully !
                                  </Typography>
                                </div>
                                <div>
                                  <Typography
                                    className="cfm_paraLive"
                                    id="modal-modal-description"
                                  >
                                    Find more candidates that meet your job specifications
                                  </Typography>
                                </div>
                              </div>

                              <div className="post_cfmBtn">
                                <Link to="/main/MyViewedActivity">
                                  <Button
                                    className="post_editBtn"
                                    variant="contained"
                                  >
                                    See More Candidates
                                  </Button>
                                </Link>
                                <Link to="/main/MyPostViewMain">
                                  <Button
                                    className="post_editBtn post_jobsBtn"
                                    variant="outlined">
                                   Hiring Pipeline
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </Box>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {todayData.map((item, index) => (
            <AppBar className="active_appBar" position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="job activity tabs"
              >
                <Tab
                  className="activeTab"
                  label={
                    <div className="active_tabCont">
                      <img src={item.image10} alt=""/>
                      <span className="active_resume">Resume details</span>
                    </div>
                  }
                  id="tab-0"
                  aria-controls="tabpanel-0"
                />

                <Tab
                  className="activeTab"
                  label={
                    <div className="active_tabCont">
                      <img src={item.image12} alt="" />
                      <span className="active_resume">Hiring Pipeline</span>
                    </div>
                  }
                  id="tab-1"
                  aria-controls="tabpanel-1"
                />
              </Tabs>
            </AppBar>
          ))}

          <TabPanel value={value} index={0}>
            <PostViewTab1 ViewJson={PostViewJson} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PostViewTab2 ViewJson={PostViewJson} />
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
}
