import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import "../MyActivityPosting/MyActive.css";
import PostingTab1 from "../../Profile/MyActivityPosting/PostingTab1";
import PostingTab2 from "../../Profile/MyActivityPosting/PostingTab2";
import PostingTab3 from "../../Profile/MyActivityPosting/PostingTab3";
import PostingTab4 from "../../Profile/MyActivityPosting/PostingTab4";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ActivePostingJson from "../../../Data/ActivePostingJson";
import PostFilter from "../../../assets/images/PostFilter.svg";
import PostCal from "../../../assets/images/PostCal.svg";
import PostJob from "../../../assets/images/postSuitcase.svg";
import PostProperty from "../../../assets/images/postVehicle.svg";
import PostVehicle from "../../../assets/images/postProperty.svg";

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
export default function ActivePosting() {
  const [value, setValue] = useState(0);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const customStyles = {
    content: {
      width: "325px",
      height: "175px",
      padding: "20px",
    },
  };

  return (
    <Box sx={{ width: "100%" }} className="activeCont">
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <div className="pst_contDashborad">
            <Typography className="activeHeading" variant="h4">
              Hi, Welcome to your DashBoard
            </Typography>
            <div className="pst_contSub">
              <div className="pst_filter" onClick={openFilterModal}>
                <img className="pstImg_filter" src={PostFilter} alt="Filter Icon" />
                <h6 className="pst_filterHead">Filter</h6>
              </div>
              <div className="pst_filter" onClick={toggleCalendar}>
                <img  className="pstImg_filter" src={PostCal} alt="Date Icon" />
                <h6 className="pst_filterHead">Date</h6>
              </div>
              <p className="pst_filterHead pst_clear">Clear All</p>
            </div>

            <Modal
              isOpen={isFilterModalOpen}
              onRequestClose={closeFilterModal}
              style={customStyles}>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={closeFilterModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <div className="filter-options">
                <div className="filter-option">
                  <div className="post_filterIcons">
                    <img src={PostJob} alt="Job Icon" />
                  </div>
                  <h6>Job</h6>
                </div>
                <div className="filter-option">
                  <div className="post_filterIcons">
                    <img src={PostProperty} alt="Property Icon" />
                  </div>
                  <h6>Property</h6>
                </div>
                <div className="filter-option">
                  <div className="post_filterIcons">
                    <img src={PostVehicle} alt="Vehicle Icon" />
                  </div>
                  <h6>Vehicle</h6>
                </div>
              </div>
            </Modal>

            {/* Calendar */}
            {isCalendarOpen && (
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
              />
            )}
          </div>
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
                    <span className="active_headingTab">Active Listings (25)</span>
                  </div>
                }
                id="tab-0"
                aria-controls="tabpanel-0"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <span  className="active_headingTab">Draft</span>
                  </div>
                }
                id="tab-1"
                aria-controls="tabpanel-1"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <span  className="active_headingTab">Closed</span>
                  </div>
                }
                id="tab-2"
                aria-controls="tabpanel-2"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <span  className="active_headingTab">Reject</span>
                  </div>
                }
                id="tab-3"
                aria-controls="tabpanel-3"
              />
            
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <PostingTab1 ActivePostingJson={ActivePostingJson} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PostingTab2 ActivePostingJson={ActivePostingJson} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <PostingTab3 ActivePostingJson={ActivePostingJson} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PostingTab4 ActivePostingJson={ActivePostingJson} />
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
}


