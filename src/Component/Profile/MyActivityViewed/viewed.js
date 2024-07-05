import React, { useState } from "react";
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
import ViewJson from "../../../Data/viewJson";
import PostCal from "../../../assets/images/PostCal.svg";
import ViewTab1 from "./ViewTab1";
import ViewTab2 from "./ViewTab2";
import ViewTab3 from "./ViewTab3";
import ViewTab4 from "./ViewTab4";
import ViewTab5 from "./ViewTab5";

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
export default function Viewed() {
  const todayData = ViewJson.slice(0, 1);
  const [value, setValue] = useState(0);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(item);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="activeCont viewCont">
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <div className="act_parentCont pb-5">
            {todayData.map((item, index) => (
              <div className="view_size" key={index}>
                <Card>
                  <div className="active_cardCont activePosting">
                    <div className="act_CardSub">
                      <p className="act_imgContent">{item.imagetxt} </p>
                      <div className="act_inner">
                        <img className="act_close" src={item.image5} alt="" />
                      </div>
                      <Typography className="act_cardHead" variant="body2">
                        {item.imagetxt1}
                      </Typography>
                    </div>
                    <div className="act_contInner">
                      <div className="viewPart1">
                        <div className="viewId">
                          <span className="vId">{item.id} : </span>
                          <span className="vIdNo">{item.idno}</span>
                        </div>
                        <div>
                          <img src={item.image1} alt="" />
                          <img src={item.v1} alt="" />
                        </div>
                      </div>

                      <div className="viewSubPart">
                        <div>
                          <div className="act_contPart2">
                            <div className="act_contContent">
                              <h1 className="act_dsg">{item.designation}</h1>
                            </div>

                            <div className="act_part2">
                              <p className="act_catgy act_loc">
                                {item.location}{" "}
                              </p>
                              <p className="act_catgy act_loc">
                                {item.jobtype}
                              </p>
                              <h2 className="act_catgy">{item.salary}</h2>
                            </div>
                            <div>
                              <div className="act_part1">
                                <span className="act_dsg actVacant">
                                  {item.Category} :{" "}
                                </span>
                                <span className="act_dsg actVacant">
                                  {item.vacancyno}
                                </span>
                              </div>
                            </div>
                          </div>  
                        </div>


                        <div  className="viewBorder">
                          <p className="viewCount">{item.aplcount}</p>
                          <p className="viewApply">{item.cattitle}</p>
                        </div>

                        <div  className="viewBorder">
                        <p  className="viewCount">{item.shortCount}</p>
                          <p className="viewApply viewShorted">{item.joblisting}</p>
                        </div>

                        <div  className="viewBorder">
                        <p  className="viewCount">{item.holdCount}</p>
                          <p className="viewApply viewHold">{item.joblisting1}</p>
                        </div>

                        <div className="viewBorder viewDateGap">
                         <div className="viewPostedOn">
                          <span className="viewPost">{item.posthead} : </span>
                          <span className="viewDate"> {item.postedon}</span>
                         </div>
                         <div>
                         <span className="viewPost">{item.expirehead} : </span>
                          <span  className="viewDate"> {item.expiredon}</span>
                         </div>
                        </div>

                        
                      </div>

                      <div className="act_part3">
                            <div className="act_partSub">
                              <img src={item.image11} alt="" />
                              <p className="adrs">{item.address}</p>
                            </div>
                          </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {todayData.map((item,index)=>(
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
                    <img src={item.vc1} alt="" />
                     <span className="active_title">{item.cattitle1}</span>
                   </div>
                 }
                 id="tab-0"
                 aria-controls="tabpanel-0"
               />
               <Tab
                 className="activeTab"
                 label={
                   <div className="active_tabCont">
                    <img src={item.vc2} alt="" />
                     <span  className="active_title">{item.joblisting0}</span>
                   </div>
                 }
                 id="tab-1"
                 aria-controls="tabpanel-1"
               />
               <Tab
                 className="activeTab"
                 label={
                   <div className="active_tabCont">
                     <img src={item.vc3} alt="" />
                     <span  className="active_title">{item.joblisting01}</span>
                   </div>
                 }
                 id="tab-2"
                 aria-controls="tabpanel-2"
               />
               <Tab
                 className="activeTab"
                 label={
                   <div className="active_tabCont">
                     <img src={item.vc4} alt="" />
                     <span  className="active_title">{item.joblisting02}</span>
                   </div>
                 }
                 id="tab-3"
                 aria-controls="tabpanel-3"
               />
                <Tab
                 className="activeTab"
                 label={
                   <div className="active_tabCont">
                     <img src={item.vc5} alt="" />
                     <span  className="active_title">{item.joblisting03}</span>
                   </div>
                 }
                 id="tab-4"
                 aria-controls="tabpanel-4"
               />
             </Tabs>
           </AppBar>

          ))}

         
          <div className="pst_contDashborad postViewBoard">
            <div className="pst_filter" onClick={toggleCalendar}>
              <img src={PostCal} alt="Date Icon" />
              <h6 className="pst_filterHead">Date</h6>
            </div>

            {isCalendarOpen && (
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
              />
            )}
          </div>

          <TabPanel value={value} index={0}>
            <ViewTab1 ViewJson={ViewJson} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ViewTab2 ViewJson={ViewJson} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ViewTab3 ViewJson={ViewJson} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ViewTab4 ViewJson={ViewJson} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <ViewTab5 ViewJson={ViewJson} />
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
}
