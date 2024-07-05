import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import JobActiveTab1 from "../../Profile/MyActivity/JobActiveTab1";
import JobActiveTab3 from "../../Profile/MyActivity/JobActiveTab3";
import JobActiveTab4 from "../../Profile/MyActivity/JobActiveTab4";
import JobActiveTab5 from "../../Profile/MyActivity/JobActiveTab5";
import ActView from "../../../assets/images/ActView.svg";
import ActApply from "../../../assets/images/ActApply.svg";
import ActSave from "../../../assets/images/ActSave.svg";
import ActListed from "../../../assets/images/ActListed.svg";
import ActReject from "../../../assets/images/ActReject.svg";
import ActiveJson from "../../../Data/ActiveJson";

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
export default function JobActivity() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="activeCont">
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <Typography className="activeHeading" variant="h4">
            My Activity
          </Typography>
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
                    <img src={ActView} alt="viewed" className="act_viewImg" />
                    <span className="active_tabView">Viewed</span>
                  </div>
                }
                id="tab-0"
                aria-controls="tabpanel-0"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <img src={ActApply} alt="applied" className="act_viewImg" />
                    <span className="active_tabView">Applied</span>
                  </div>
                }
                id="tab-1"
                aria-controls="tabpanel-1"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <img src={ActSave} alt="saved" className="act_viewImg" />
                    <span className="active_tabView">Saved</span>
                  </div>
                }
                id="tab-2"
                aria-controls="tabpanel-2"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <img
                      src={ActListed}
                      alt="shortlisted"
                      className="act_viewImg"
                    />
                    <span className="active_tabView">Shortlisted</span>
                  </div>
                }
                id="tab-3"
                aria-controls="tabpanel-3"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <img
                      src={ActReject}
                      alt="rejected"
                      className="act_viewImg"
                    />
                    <span className="active_tabView">Rejected</span>
                  </div>
                }
                id="tab-4"
                aria-controls="tabpanel-4"
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <JobActiveTab1 ActiveJson={ActiveJson} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <JobActiveTab1 ActiveJson={ActiveJson} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <JobActiveTab3 ActiveJson={ActiveJson} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <JobActiveTab4 ActiveJson={ActiveJson} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <JobActiveTab5 ActiveJson={ActiveJson} />
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
}
