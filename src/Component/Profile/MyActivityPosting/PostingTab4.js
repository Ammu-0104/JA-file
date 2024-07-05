import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function JobActiveTab4({ ActivePostingJson }) {
  const todayData = ActivePostingJson.slice(0, 1);
  const yesterdayData = ActivePostingJson.slice(1, 2);
  const Tomorrow = ActivePostingJson.slice(2, 4);
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
              <Card>
                <div className="active_cardCont activePosting activePost4">
                  <div className="act_CardSub">
                    <p className="act_imgContent">{item.imagetxt} </p>
                    <div className="act_inner">
                      <img className="act_close" src={item.image13} alt="" />
                    </div>
                  </div>
                  <div className="act_contInner">
                    <div className="act_contPart2">
                      <div className="act_contContent">
                        <h1 className="act_dsg">{item.designation}</h1>
                        <div className="act_activeGap">
                          <img src={item.image12} alt="" />
                          <span className="act_catgy1">
                            {item.joblisting2}
                          </span>{" "}
                        </div>
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

                    <div className="act_partBtn">
                      <button className="postBtn">{item.delete}</button>
                      <button className="postBtn btnReact">
                        {item.reactivate}
                      </button>
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
      </CardContent>

      <Typography className="active_today" variant="h6">
        14 March 2024
      </Typography>
      <div className="act_parentCont pb-5">
        {yesterdayData.map((item, index) => (
          <div key={index}>
            <Card>
              <div className="active_cardCont activePosting activePost4">
                <div className="act_CardSub">
                  <p className="act_imgContent">{item.imagetxt} </p>
                  <div className="act_inner">
                    <img className="act_close" src={item.image13} alt="" />
                  </div>
                </div>
                <div className="act_contInner">
                  <div className="act_contPart2">
                    <div className="act_contContent">
                      <h1 className="act_dsg">{item.designation}</h1>
                      <div className="act_activeGap">
                        <img src={item.image12} alt="" />
                        <span className="act_catgy1">
                          {item.joblisting2}
                        </span>{" "}
                      </div>
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

                  <div className="act_partBtn">
                    <button className="postBtn">{item.delete}</button>
                    <button className="postBtn btnReact">
                      {item.reactivate}
                    </button>
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
              <div className="active_cardCont activePosting activePost4">
                <div className="act_CardSub">
                  <p className="act_imgContent">{item.imagetxt} </p>
                  <div className="act_inner">
                    <img className="act_close" src={item.image13} alt="" />
                  </div>
                </div>
                <div className="act_contInner">
                  <div className="act_contPart2">
                    <div className="act_contContent">
                      <h1 className="act_dsg">{item.designation}</h1>
                      <div className="act_activeGap">
                        <img src={item.image12} alt="" />
                        <span className="act_catgy1">
                          {item.joblisting2}
                        </span>{" "}
                      </div>
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

                  <div className="act_partBtn">
                    <button className="postBtn">{item.delete}</button>
                    <button className="postBtn btnReact">
                      {item.reactivate}
                    </button>
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
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Draft</MenuItem>
      </Menu>
    </div>
  );
}

export default JobActiveTab4;
