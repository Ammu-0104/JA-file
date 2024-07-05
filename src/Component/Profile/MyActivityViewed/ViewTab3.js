import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Popover } from "@mui/material";

function ViewTab3({ ViewJson }) {
  const todayData = ViewJson.slice(1, 4);
  const TomorrowData = ViewJson.slice(4, 13);
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
      {/* first card */}
      <CardContent>
        <Typography className="active_today" variant="h6">
          Today
        </Typography>
        <Link to="/main/MyViewedActivity">
          <div className="act_parentCont pb-5">
            {todayData.map((item, index) => (
              <div key={index}>
                <Card className={`viewParent ${item.colorClass}`}>
                  <div className="active_cardCont activePosting">
                    <div className="viewContParent">
                      <div className="act_CardSub view_cardSub">
                        <div className="act_inner view_inner">
                          <p className={`act_imgContent ${item.bgColor}`}>
                            {item.percentage}{" "}
                          </p>
                          <img className="act_close" src={item.image1} alt="" />
                        </div>
                        <Typography
                          className="act_cardHead view_cardHead"
                          variant="body2"
                        >
                          {item.candidatename}
                        </Typography>
                      </div>
                      <div
                        className={`view_contPending ${item.classColorHold}`}
                      >
                        <img src={item.image14} alt="" />
                        <span className={`view_pending ${item.classColorHold}`}>
                          {item.status3}
                        </span>
                      </div>
                    </div>

                    <div className="act_contInner view_subParent">
                      <div className="act_contPart2">
                        <div className="act_contContent">
                          <h1 className="act_dsg view_dsg">
                            {item.designation}
                          </h1>
                          <img
                            src={item.image7}
                            alt=""
                            onClick={(e) => handleClick(e, item)}
                          />
                        </div>
                        <div className="viewCmpName">
                          <h1 className="view_cmp">{item.companyname}</h1>
                        </div>

                        <div className="act_part2 view_part2">
                          <p className="act_catgy act_loc">{item.location} </p>
                          <p className="act_catgy act_loc">{item.experiance}</p>
                          <h2 className="act_catgy">{item.salary}</h2>
                        </div>
                      </div>

                      <div className="act_part4">
                        <div className="act_part4Gap">
                          <img
                            className="act_people"
                            src={item.image10}
                            alt=""
                          />
                          <h1
                            className="act_cardHead act_intrest"
                            variant="body2"
                          >
                            {item.emailid}
                          </h1>
                        </div>
                        <img src={item.image12} alt="" />
                      </div>

                      <div className="view_part4Gap">
                        <img className="act_people" src={item.image8} alt="" />
                        <span
                          className="act_cardHead act_intrest"
                          variant="body2"
                        >
                          {item.phoneno}
                        </span>
                      </div>

                      <div className="act_part3">
                        <div className="act_partSub">
                          <img src={item.image6} alt="" />
                          <p className="adrs">{item.address}</p>
                        </div>
                        <div className="act_partSub">
                          <span className="adrs">{item.appliedat}</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    sx: {
                      backgroundColor: "background.paper",
                      color: "text.primary",
                      boxShadow: 5,
                      borderRadius: 1,
                      width: 112,
                      height: 90,
                    },
                  }}
                >
                  {currentItem && (
                    <>
                      <MenuItem onClick={handleClose}>
                        {item.editicon1}
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {item.editicon2}
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {item.editicon3}
                      </MenuItem>
                    </>
                  )}
                </Popover>
              </div>
            ))}
          </div>
        </Link>
      </CardContent>

      {/* first card */}

      <Typography className="active_today" variant="h6">
        15 March 2024
      </Typography>
      <Link to="/main/MyViewedActivity">
        <div className="act_parentCont pb-5">
          {TomorrowData.map((item, index) => (
            <div key={index}>
              <Card className="viewParent">
                <div className="active_cardCont activePosting">
                  <div className="viewContParent">
                    <div className="act_CardSub view_cardSub">
                      <div className="act_inner view_inner">
                        <p className={`act_imgContent ${item.bgColor}`}>
                          {item.percentage}{" "}
                        </p>
                        <img className="act_close" src={item.image1} alt="" />
                      </div>
                      <Typography
                        className="act_cardHead view_cardHead"
                        variant="body2"
                      >
                        {item.candidatename}
                      </Typography>
                    </div>
                    <div className={`view_contPending ${item.classColorHold}`}>
                      <img src={item.image14} alt="" />
                      <span className={`view_pending ${item.classColorHold}`}>
                        {item.status3}
                      </span>
                    </div>
                  </div>

                  <div className="act_contInner view_subParent">
                    <div className="act_contPart2">
                      <div className="act_contContent">
                        <h1 className="act_dsg view_dsg">{item.designation}</h1>
                        <img
                          src={item.image7}
                          alt=""
                          onClick={(e) => handleClick(e, item)}
                        />
                      </div>
                      <div className="viewCmpName">
                        <h1 className="view_cmp">{item.companyname}</h1>
                      </div>

                      <div className="act_part2 view_part2">
                        <p className="act_catgy act_loc">{item.location}</p>
                        <p className="act_catgy act_loc">{item.experiance}</p>
                        <h2 className="act_catgy">{item.salary}</h2>
                      </div>
                    </div>

                    <div className="act_part4">
                      <div className="act_part4Gap">
                        <img className="act_people" src={item.image10} alt="" />
                        <h1
                          className="act_cardHead act_intrest"
                          variant="body2"
                        >
                          {item.emailid}
                        </h1>
                      </div>
                      <img src={item.image12} alt="" />
                    </div>

                    <div className="view_part4Gap">
                      <img className="act_people" src={item.image8} alt="" />
                      <span
                        className="act_cardHead act_intrest"
                        variant="body2"
                      >
                        {item.phoneno}
                      </span>
                    </div>

                    <div className="act_part3">
                      <div className="act_partSub">
                        <img src={item.image6} alt="" />
                        <p className="adrs">{item.address}</p>
                      </div>
                      <div className="act_partSub">
                        <span className="adrs">{item.appliedat}</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "background.paper",
                    color: "text.primary",
                    boxShadow: 5,
                    borderRadius: 1,
                    width: 112,
                    height: 90,
                  },
                }}
              >
                {currentItem && (
                  <>
                    <MenuItem onClick={handleClose}>{item.editicon1}</MenuItem>
                    <MenuItem onClick={handleClose}>{item.editicon2}</MenuItem>
                    <MenuItem onClick={handleClose}>{item.editicon3}</MenuItem>
                  </>
                )}
              </Popover>
            </div>
          ))}
        </div>
      </Link>

      {/* Common Popover for all cards */}
    </div>
  );
}

export default ViewTab3;
