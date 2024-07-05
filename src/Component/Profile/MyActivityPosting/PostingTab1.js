import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function JobActiveTab1({ ActivePostingJson }) {
  const todayData = ActivePostingJson.slice(0, 1);
  const yesterdayData = ActivePostingJson.slice(1, 2);
  const Tomorrow = ActivePostingJson.slice(2, 5);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentItem(null);
  };
  return (
    <div>
      <CardContent>
        <Typography className="active_today" variant="h6">
          Today
        </Typography>

        <div className="act_parentCont pb-5">
          {todayData.map((item, index) => (
            <div key={index}>
              <Link to='/main/MyViewedActivity'>
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
                    <div className="act_contPart2">
                      <div className="act_contContent">
                        <h1 className="act_dsg">{item.designation}</h1>
                        <div className="act_activeGap">
                          <img src={item.image} alt="" />
                          <span className="act_catgy1">
                            {item.cattitle}
                          </span>{" "}
                        </div>

                        <img
                          src={item.image10}
                          alt=""
                          onClick={(e) => handleClick(e, item)}
                        />
                      </div>

                      <div className="act_part2">
                        <p className="act_catgy act_loc">{item.location} </p>
                        <p className="act_catgy act_loc">{item.jobtype}</p>
                        <h2 className="act_catgy">{item.salary}</h2>
                      </div>
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
                    <div className="act_part4">
                      <span
                        className="act_cardHead act_intrest"
                        variant="body2"
                      >
                        {item.intrest}
                      </span>
                      <div className="act_part4Gap">
                        <img className="act_people" src={item.image3} alt="" />
                        <img src={item.image4} alt="" />
                      </div>
                    </div>

                    <div className="act_part3">
                      <div className="act_partSub">
                        <img src={item.image11} alt="" />
                        <p className="adrs">{item.address}</p>
                      </div>
                      <div className="act_partSub">
                        <span className="act_catgy act_title">
                          {item.postedon}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
          </Link>
            </div>
          ))}
        </div>
  
       
      </CardContent>

      <Typography className="active_today" variant="h6">
        14 March 2024
      </Typography>
      <div className="act_parentCont pb-5">
        {yesterdayData.map((item, index) => (
          <div key={index}>
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
                  <div className="act_contPart2">
                    <div className="act_contContent">
                      <h1 className="act_dsg">{item.designation}</h1>
                      <div className="act_activeGap">
                        <img src={item.image} alt="" />
                        <span className="act_catgy1">{item.cattitle}</span>{" "}
                      </div>

                      <img
                        src={item.image10}
                        alt=""
                        onClick={(e) => handleClick(e, item)}
                      />
                    </div>

                    <div className="act_part2">
                      <p className="act_catgy act_loc">{item.location} </p>
                      <p className="act_catgy act_loc">{item.jobtype}</p>
                      <h2 className="act_catgy">{item.salary}</h2>
                    </div>
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
                  <div className="act_part4">
                    <span className="act_cardHead act_intrest" variant="body2">
                      {item.intrest}
                    </span>
                    <div className="act_part4Gap">
                      <img className="act_people" src={item.image3} alt="" />
                      <img src={item.image4} alt="" />
                    </div>
                  </div>

                  <div className="act_part3">
                    <div className="act_partSub">
                      <img src={item.image11} alt="" />
                      <p className="adrs">{item.address}</p>
                    </div>
                    <div className="act_partSub">
                      <span className="act_catgy act_title">
                        {item.postedon}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Typography className="active_today" variant="h6">
        15 March 2024
      </Typography>
      <div className="act_parentCont pb-5">
        {Tomorrow.map((item, index) => (
          <div key={index}>
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
                  <div className="act_contPart2">
                    <div className="act_contContent">
                      <h1 className="act_dsg">{item.designation}</h1>
                      <div className="act_activeGap">
                        <img src={item.image} alt="" />
                        <span className="act_catgy1">{item.cattitle}</span>{" "}
                      </div>

                      <img
                        src={item.image10}
                        alt=""
                        onClick={(e) => handleClick(e, item)}
                      />
                    </div>

                    <div className="act_part2">
                      <p className="act_catgy act_loc">{item.location} </p>
                      <p className="act_catgy act_loc">{item.jobtype}</p>
                      <h2 className="act_catgy">{item.salary}</h2>
                    </div>
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
                  <div className="act_part4">
                    <span className="act_cardHead act_intrest" variant="body2">
                      {item.intrest}
                    </span>
                    <div className="act_part4Gap">
                      <img className="act_people" src={item.image3} alt="" />
                      <img src={item.image4} alt="" />
                    </div>
                  </div>

                  <div className="act_part3">
                    <div className="act_partSub">
                      <img src={item.image11} alt="" />
                      <p className="adrs">{item.address}</p>
                    </div>
                    <div className="act_partSub">
                      <span className="act_catgy act_title">
                        {item.postedon}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
     <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          classes={{ paper: "customMenu" }}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Draft</MenuItem>
        </Menu>
      
    </div>
  );
}

export default JobActiveTab1;
