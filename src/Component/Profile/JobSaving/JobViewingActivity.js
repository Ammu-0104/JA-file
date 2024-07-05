import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import SavedTab1 from "./SavedTab1";
import SavedTab2 from "./SavedTad2";
import cardsData from "../../../Data/CardsDataJson";

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
    <div sx={{ width: "100%" }} className="activeCont">
      <Card sx={{ margin: 2 }}>
        <CardContent>
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
                    <span>Job Applied</span>
                  </div>
                }
                id="tab-0"
                aria-controls="tabpanel-0"
              />
              <Tab
                className="activeTab"
                label={
                  <div className="active_tabCont">
                    <span>Saved Jobs</span>
                  </div>
                }
                id="tab-1"
                aria-controls="tabpanel-1"
              />
              
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <SavedTab2  cardsData={cardsData} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SavedTab1 cardsData={cardsData}  />
          </TabPanel>
          
        </CardContent>
      </Card>
    </div>
  );
}
