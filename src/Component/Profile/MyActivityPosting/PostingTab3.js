import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function JobActiveTab3({ ActivePostingJson }) {
  const todayData = ActivePostingJson.slice(5, 6);
  const yesterdayData = ActivePostingJson.slice(6, 7);
  const Tomorrow = ActivePostingJson.slice(7, 9);

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
                <div className="active_cardCont activePosting activePost2">
                  <div className="act_CardSub">
                    <p className="act_imgContent">{item.imagetxt} </p>
                    <div className="act_inner">
                      <img className="act_close" src={item.image5} alt="" />
                    </div>
                  </div>
                  <div className="act_contInner">
                    <div className="act_contPart2">
                      <div className="act_contContent">
                        <h1 className="act_dsg">{item.designation}</h1>
                        <div className="act_activeGap">
                          <img src={item.image12} alt="" />
                          <span className="act_catgy1">
                            {item.joblisting1}
                          </span>{" "}
                        </div>
                      </div>

                      <div className="act_part2">
                        <p className="act_catgy act_loc">{item.location} </p>
                        <p className="act_catgy">{item.jobtype}</p>
                      </div>
                    </div>

                    <div>
                      <div className="act_part1">
                        <h2 className="act_salary">{item.salary}</h2>
                      </div>
                    </div>

                    <div className="act_part3">
                      <div className="act_partSub">
                        <img src={item.image11} alt="" />
                        <p className="adrs">{item.address}</p>
                      </div>
                    </div>

                    <div className="act_partBtn">
                      <button className="postBtn">{item.delete}</button>
                      <button className="postBtn btnReact">
                        {item.reactivate}
                      </button>
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
              <div className="active_cardCont activePosting activePost2">
                <div className="act_CardSub">
                  <p className="act_imgContent">{item.imagetxt} </p>
                  <div className="act_inner">
                    <img className="act_close" src={item.image5} alt="" />
                  </div>
                </div>
                <div className="act_contInner">
                  <div className="act_contPart2">
                    <div className="act_contContent">
                      <h1 className="act_dsg">{item.designation}</h1>
                      <div className="act_activeGap">
                        <img src={item.image12} alt="" />
                        <span className="act_catgy1">{item.joblisting1}</span>{" "}
                      </div>
                    </div>

                    <div className="act_part2">
                      <p className="act_catgy act_loc">{item.location} </p>
                      <p className="act_catgy">{item.jobtype}</p>
                    </div>
                  </div>

                  <div>
                    <div className="act_part1">
                      <h2 className="act_salary">{item.salary}</h2>
                    </div>
                  </div>

                  <div className="act_part3">
                    <div className="act_partSub">
                      <img src={item.image11} alt="" />
                      <p className="adrs">{item.address}</p>
                    </div>
                  </div>

                  <div className="act_partBtn">
                    <button className="postBtn">{item.delete}</button>
                    <button className="postBtn btnReact">
                      {item.reactivate}
                    </button>
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
              <div className="active_cardCont activePosting activePost2">
                <div className="act_CardSub">
                  <p className="act_imgContent">{item.imagetxt} </p>
                  <div className="act_inner">
                    <img className="act_close" src={item.image5} alt="" />
                  </div>
                </div>
                <div className="act_contInner">
                  <div className="act_contPart2">
                    <div className="act_contContent">
                      <h1 className="act_dsg">{item.designation}</h1>
                      <div className="act_activeGap">
                        <img src={item.image12} alt="" />
                        <span className="act_catgy1">{item.joblisting1}</span>{" "}
                      </div>
                    </div>

                    <div className="act_part2">
                      <p className="act_catgy act_loc">{item.location} </p>
                      <p className="act_catgy">{item.jobtype}</p>
                    </div>
                  </div>

                  <div>
                    <div className="act_part1">
                      <h2 className="act_salary">{item.salary}</h2>
                    </div>
                  </div>

                  <div className="act_part3">
                    <div className="act_partSub">
                      <img src={item.image11} alt="" />
                      <p className="adrs">{item.address}</p>
                    </div>
                  </div>

                  <div className="act_partBtn">
                    <button className="postBtn">{item.delete}</button>
                    <button className="postBtn btnReact">
                      {item.reactivate}
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobActiveTab3;
